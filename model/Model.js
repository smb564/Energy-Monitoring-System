/**
 * Created by prabod on 12/9/16.
 */
import * as ORM from '../orm/orm'
import * as field from '../orm/Fields'

export default class Model{
    constructor(){

    }
    insert(){
        let orm = new ORM();
        orm.insert(this);
    }

    findbyId(id){
        let orm = new ORM();
        let obj = orm.findbyId(this, id);
        return obj;
    }

    generateSchema(){
        let schema = 'CREATE TABLE ' + this.constructor.name + ' (';
        let pk ;
        for (let entity in this){

            let statement = entity ;

            if( this[entity] instanceof field.IntegerField){
                statement += ' int';
                if (this[entity].maxLength !== null){
                    statement += '(' + this[entity].maxLength + ')';
                }
                if (this[entity].required){
                    statement += ' NOT NULL';
                }
                else {
                    statement += ' NULL';
                }
                if (this[entity].ai && this[entity].pk){
                    pk = entity;
                    statement += ' AUTO_INCREMENT';
                }
                if (this[entity].defaultVal !== null){
                    statement += ' DEFAULT ' + "`" + this[entity].defaultVal + "`";
                }
            }

            else if( this[entity] instanceof field.FloatField){
                statement += ' float';
                if (this[entity].maxLength !== null){
                    statement += '(' + this[entity].maxLength + ')';
                }
                if (this[entity].required){
                    statement += ' NOT NULL';
                }
                else {
                    statement += ' NULL';
                }
                if (this[entity].defaultVal !== null){
                    statement += ' DEFAULT ' + "`" + this[entity].defaultVal + "`";
                }
            }

            else if( this[entity] instanceof field.CharField){
                statement += ' VARCHAR';
                if (this[entity].maxLength !== null){
                    statement += '(' + this[entity].maxLength + ')';
                }
                if (this[entity].required){
                    statement += ' NOT NULL';
                }
                else {
                    statement += ' NULL';
                }
                if (this[entity].pk){
                    pk = entity;
                }
                if (this[entity].defaultVal !== null){
                    statement += ' DEFAULT ' + "`" + this[entity].defaultVal + "`";
                }
            }

            else if( this[entity] instanceof field.BooleanField){
                statement += ' boolean';
                if (this[entity].required){
                    statement += ' NOT NULL';
                }
                else {
                    statement += ' NULL';
                }
                if (this[entity].defaultVal !== null){
                    statement += ' DEFAULT ' + "`" + this[entity].defaultVal + "`";
                }
            }
            statement += ',';
            schema += statement;
        }
        if (pk !== undefined){
            schema += 'PRIMARY KEY ( ' + pk + ' )';
            schema += ');'
        }else {
            schema = schema.substring(0,schema.length-1);
            schema += ');'
        }

        return schema;
    }
}