public with sharing class searchDeliveryController {
    
    @AuraEnabled(cacheable=true)
    
    public static List<Delivery_Item__c> fetchDelivery(String searchKeyWord) {

        string searchKey = '%'+searchKeyWord+'%';
        List<Delivery_Item__c> returnList = new List<Delivery_Item__c>();

        List<Delivery_Item__c> lstofAccount = [SELECT Id, Name, Quantity__c, Delivery_Item_Status__c, Delivery_Date__c,
        Driver_Name__c, Driver_Phone_Number__c, Delivery_Item_ID__c FROM Delivery_Item__c
        where Delivery_Item_ID__c LIKE: searchKey Limit 500];

        for(Delivery_Item__c acc:lstofAccount){

            returnList.add(acc);
        }
        return returnList;
        
    }
}