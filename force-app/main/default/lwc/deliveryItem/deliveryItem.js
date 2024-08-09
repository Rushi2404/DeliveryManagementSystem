import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import Delivery_Item__c from '@salesforce/schema/Delivery_Item__c';
import DeliveryItemName from '@salesforce/schema/Delivery_Item__c.Name';
import DeliveryDate from '@salesforce/schema/Delivery_Item__c.Delivery_Date__c';
import DeliveryItemPriority from '@salesforce/schema/Delivery_Item__c.Delivery_Item_Priority__c';
import DeliveryItemStatus from '@salesforce/schema/Delivery_Item__c.Delivery_Item_Status__c';
import DriverName from '@salesforce/schema/Delivery_Item__c.Driver_Name__c';
import CustomerName from '@salesforce/schema/Delivery_Item__c.Customer_Name__c';
import PackageNumber from '@salesforce/schema/Delivery_Item__c.Package_Number__c';
import Quantity from '@salesforce/schema/Delivery_Item__c.Quantity__c';
import ItemDescription from '@salesforce/schema/Delivery_Item__c.Item_Description__c';
import { NavigationMixin } from 'lightning/navigation';

export default class DeliveryItem extends NavigationMixin(LightningElement) {
    Delivery_Item__c=Delivery_Item__c;
    deliveryItemName = DeliveryItemName;
    deliveryDate = DeliveryDate;
    deliveryItemPriority = DeliveryItemPriority;
    deliveryItemStatus = DeliveryItemStatus;
    driverName = DriverName;
    customerName = CustomerName;
    packageNumber = PackageNumber;
    quantity = Quantity;
    itemDescription = ItemDescription;

    showModal = false;
    recordID;

    handleSuccess(event) {
        this.recordID = event.detail.id;
        this.showModal = true;

        const evt = new ShowToastEvent({
            title: 'Success',
            message: 'Delivery Item Created Successfully',
            variant: 'success'
        });

        this.dispatchEvent(evt);
    }

    closeModal() {
        this.showModal = false;
    }

    handleSave() {
        // Add any additional logic you might need to save changes
        // For now, it just closes the modal
        this.showModal = false;

        // Redirect to the Delivery Management tab
    window.location.href = '/lightning/n/Delivery_Management';
    }
}
