import { DeviceService } from './../../services/device/device.service';
import { UserService } from './../../services/user/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

/**
 * Search page
 */
@Component({
    selector: 'app-search',
    templateUrl: './search.page.html',
    styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

    private filter: FormGroup;
    public size: boolean;
    public submitted: boolean;
    public displayedColumns: string[] = ['Key', 'temp', 'device', 'gps', 'time'];
    public dataSource;

    @ViewChild(MatPaginator) paginator: MatPaginator;

    /**
     * Constructor
     * @param {FormBuilder} formBuild
     * @param {DeviceService} service
     * @param {UserService} userApi
     * @param {Router} router
     */
    constructor(
        private formBuilder: FormBuilder,
        private service: DeviceService,
        private userApi: UserService,
        private router: Router) { }

    /**
     * OnInit
     */
    ngOnInit() {
        if (window.innerWidth > 760) {
            this.size = true;
        }
        this.filter = this.formBuilder.group({
            filterId: ['']
        });
    }

    /**
     * Search data
     */
    search() {
        let id = this.filter.value['filterId'];
        this.service.getAllData().subscribe(res => {

            let data = [];

            for (let key in res) {
                let date = new Date(parseInt(res[key]['hour']));
                res[key]['hour'] = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
                if (this.comprobar(res[key], id))
                    data.push(res[key]);
            }


            this.dataSource = new MatTableDataSource(data);
            this.dataSource.paginator = this.paginator;
            this.submitted = true;
        },
            err => {

                console.log(err.status);
                this.userApi.logout();
                this.router.navigate(['/login'], { replaceUrl: true });
            });
    }

    /**
     * Comprobar dato por id
     * @param dato
     * @param id
     * @return boolean
     */
    comprobar(dato, id) : boolean{
        if ((id != undefined || id !== "") && dato.id === id) {
            return true;
        } else if ((id != undefined || id !== "") && dato.id !== id) {
            return false;
        } else return true;      
    }

    back() {
        this.submitted = false;
    }

}
