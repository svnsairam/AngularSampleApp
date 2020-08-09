import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
})
export class ServerComponent{
    serverId:number = 10;
    serverStatus: String ='offline';
    constructor(){
        this.serverStatus = Math.random()>0.5?'online':'offline';
    }
    getServerStatus(){
        return this.serverStatus;
    }
    getServerId(){
        return this.serverId;
    }
    getColor():String{
        return this.serverStatus=='online'?'blue':'grey';
    }
}