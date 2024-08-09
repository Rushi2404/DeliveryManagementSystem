import { LightningElement, track } from 'lwc';
import fetchDelivery from '@salesforce/apex/searchDeliveryController.fetchDelivery';
export default class SearchDelivery extends LightningElement {

@track records;
deliveryId;

handleDeliveryIdChange(event)
{
    this.deliveryId = event.target.value;
}

handleSearch()
{
    fetchDelivery({searchKeyWord: this.deliveryId}) 

    .then(result => {
        this.records = result;
    })
    .catch(error => {
        console.log(error);
    });
}

cols = [
        {label:'Item Name', fieldName:'Name', type:'text'},
        {label:'Item Status', fieldName:'Delivery_Item_Status__c', type:'Picklist'},
        {label:'Delivery Date', fieldName:'Delivery_Date__c', type:'Date'},
        {label:'Delivery Item ID', fieldName:'Delivery_Item_ID__c', type:'Auto Number'}
        ];

}