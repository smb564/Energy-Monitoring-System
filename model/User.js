/**
 * Created by prabod on 12/7/16.
 */
import * as field from '../orm/Fields'
import * as ORM from '../orm/orm'
import Model from 'Model'

class User extends Model{
    constructor(){
        this.first_name = new field.CharField(30);
        this.last_name = new field.CharField(50);
        this.user_name = new field.CharField(20);
        this.password = new field.CharField(30);
        this.is_admin = new field.BooleanField();

    }

    createObject(first_name, last_name, user_name, password,is_admin){
        this.first_name.set(first_name);
        this.last_name.set(last_name);
        this.user_name.set(user_name);
        this.password.set(password);
        this.is_admin.set(is_admin);
    }

    insert(){
        let orm = new ORM();
        orm.insert(this);
    }
}