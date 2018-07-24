import React from 'react';
import Flux from '@4geeksacademy/react-flux-dash';
import {Session} from '@breathecode/react-session';
import {Notify} from './utils/notifier';
import {POST, GET, PUT} from './utils/api_wrapper';

export const login = (email, password) => {
    POST('login', {
      username_or_email: email,
      password: password
    })
    .then(function(data){
       Session.actions.login({ user: data.user, access_token: data.token });
       window.location.href="/dashboard";
    })
    .catch(function(error) {
        Notify.error(error.message || error);
        //console.error(error);
    });
};

export const signup = (email, password, first_name, last_name) => {
    POST('register', {
      email, password, first_name, last_name,
      username: email,
      type: 'employee'
    })
    .then(function(data){
        window.location.href="/login";
    })
    .catch(function(error) {
        Notify.error(error.message || error);
        //console.error(error);
    });
};

export const logout = () => {
      Session.actions.logout();
};

export const fetchAll = (entities) => {
    entities.forEach((entity) =>
        GET(entity.slug || entity)
        .then(function(list){
            if(typeof entity.callback == 'function') entity.callback();
            Flux.dispatchEvent(entity.slug || entity, list);
        })
        .catch(function(error) {
            //Notify.error(error.message || error);
            //console.error(error);
        })
    );
};

class _Store extends Flux.DashStore{
    constructor(){
        super();
    }
    
    get(type, id){
        const entities = this.getState(type);
        if(entities) return entities.find(ent => ent.id == id);
        else return null;
    }
    replace(type, id, item){
        const entities = this.getState(type);
        if(entities) return entities.map(ent => {
            if(ent.id != id) return ent;
            return item;
        });
        else throw new Error("No item found in "+type);
    }
    remove(type, id){
        const entities = this.getState(type);
        if(entities) return entities.filter(ent => {
            return (ent.id != id);
        });
        else throw new Error("No items found in "+entities);
    }
}
export const store = new _Store();