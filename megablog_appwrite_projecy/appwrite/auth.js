import {Client, Account,Id} from 'appwrite'

class AuthService{

    client = new Client();
    account;

    constructor()
    {
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email,password,name})
    {
        try {
           const userAccount =   await this.account.create(Id.unique(),email,password,name);   
             if(userAccount)
             {
                //call another method
                return this.login({email,password});
             }
             else
             {
                return userAccount;
             }
        } 
        catch (error) {
            throw error;
        }
    }

    async login(email, password)
    {
        try 
        {
           return await this.account.createEmailSession(email,password);    
        } 
        catch (error) {
            
        }
    }

    async getCurrentUser()
    {
        try {
        return this.account.get();    
        } 
        catch (error) {
            console.log("Appwrite service :: getCurrentUser:: error",error);
            
        }
        return  null;
    }

    async logout()
    {
        try
         {
          return this.account.deleteSessions();  
        } 
        catch (error) {
            console.log("Appwrite service :: logout:: error",error);
            
        }
    }
}

const authService = new AuthService();

export default authService;