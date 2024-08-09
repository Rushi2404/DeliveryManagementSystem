import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class AdminPage extends NavigationMixin(LightningElement) {
    handleOrderNow() 
    {
        let cmpDef = {
            componentDef: "c:deliveryItem"
            
        };

        let encodedDef = btoa(JSON.stringify(cmpDef)); //detail of the component page in Base64 encoded form
        this[NavigationMixin.Navigate]({

            type: "standard__webPage",
            attributes: {
                url: "/one/one.app#" + encodedDef
            }
            
        });
        
    }

    handleDelConf()
    {
        this[NavigationMixin.Navigate]({

            type: "standard__objectPage",
            attributes:{
                objectApiName: 'Delivery_Confirmation__c',
                actionName: 'new'
            }
        });
    }

    handleAddDriver()
    {
        this[NavigationMixin.Navigate]({

            type: "standard__objectPage",
            attributes:{
                objectApiName: 'Driver__c',
                actionName: 'new'
            }
        });
    }
}
// Test 