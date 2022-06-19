import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {

    //save xml in variable
    xml: string = `<?xml version='1.0' encoding='UTF-8'?>
    <SolicitaTokenRequest>
    <usuario>83466371</usuario>
    <apikey>WEl3Zdf9qbKc8mulE0SRK5j</apikey>
    </SolicitaTokenRequest>`;

    xmlExample: string = ` <ParametroCatalogoModel  xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/ApiDocs.Models">
    <Api xmlns:d3p1="http://www.w3.org/2001/XMLSchema" i:type="d3p1:int">1</Api>
    <Descripcion xmlns:d3p1="http://www.w3.org/2001/XMLSchema" i:type="d3p1:string">Nombre de usuario</Descripcion>
    <Nom_Tipo_Dato xmlns:d3p1="http://www.w3.org/2001/XMLSchema" i:type="d3p1:string">STRING</Nom_Tipo_Dato>
    <Nom_Tipo_Parametro xmlns:d3p1="http://www.w3.org/2001/XMLSchema" i:type="d3p1:string">Header_Url</Nom_Tipo_Parametro>
    <Parametro xmlns:d3p1="http://www.w3.org/2001/XMLSchema" i:type="d3p1:int">1</Parametro>
    <Plantilla xmlns:d3p1="http://www.w3.org/2001/XMLSchema" i:type="d3p1:string"></Plantilla>
    <Tipo_Dato xmlns:d3p1="http://www.w3.org/2001/XMLSchema" i:type="d3p1:unsignedByte">1</Tipo_Dato>
    <Tipo_Parametro xmlns:d3p1="http://www.w3.org/2001/XMLSchema" i:type="d3p1:unsignedByte">1</Tipo_Parametro>
</ParametroCatalogoModel>`;

    private url: string = 'https://dev2.api.ifacere-fel.com/api/solicitarToken';
    private urlExample: string = 'https://localhost:7156/api/ParametroCatalogo';

    constructor(private _http: HttpClient) {

    }

    //post xml to body
    postXML() {
        let headers = new HttpHeaders({ "Content-Type": "application/xml" });
        return this._http.post(this.url, this.xml, { headers: headers });

    }

    postXmlExampe(){
        let headers = new HttpHeaders({ "Content-Type": "application/xml" });
        return this._http.post(this.urlExample, this.xmlExample, { headers: headers });
    }


}