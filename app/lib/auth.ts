import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from "next-auth/providers/google";

export const NEXT_AUTH = { //any request that is coming to /api/auth/anything will be handled by this next auth lib
    providers : [
        CredentialsProvider({
            name : 'Email',
            credentials : {
                username : {label : 'Email' , type : 'text' , placeholder : 'Email'},
                password : {label : 'Password' , type : 'password' , placeholder : 'Password'},
            },
            async authorize(credentials : any) {
                console.log(credentials);

                //const username = credentials.username;
                //const password  = credentials.password;

                //const user = await prisma.user.findOne({
                    //where : {
                        //username : username,
                       // password : password
                   // }
                //});

                //if user is not there then reurn null then next auth will understand the creds were incorrect
                    
                return {
                    id : "userid1", 
                    name : "Asda",
                    email : "Asdas"
                }//it will login and take us to the / page
                
                //return {
                   // id : user.id,
                   // email : user.email
                //}

                return {
                    id : "user1"
                };
            }
            
        }),
        GoogleProvider({ //adding signin with google
            clientId : process.env.GOOGLE_CLIENT_ID || "",
            clientSecret : process.env.GOOGLE_CLIENT_SECRET  || ""
        })
    ],
    secret : process.env.NEXTAUTH_SECRET,
    callbacks : { //callbacks is that next auth dosent provide you with all the session data we use callbacks for it
        //signIn : ({user}) => { //if we want to block a particular user
          //  if(user.email == "bannedemail.com") {
            //    return false
            //}
            //return true
        //},
        //jwt : ({token,user}) => { //this callback is used when a jwt is created , the returnded value will be encrypted and stored in the cookie
          //  console.log(token);//the jti is the encoded cookie
            //return token;
        //},
        session : ({session , token , user} : any) => { // the session callback is called whenever a session is checked , only a subset of the the token is returned by defauly but we can add extra things like id which is nothing but sub here and many extra things like when did he signed in and etc etc
            if(session && session.user){
                session.user.id = token.sub;
            }
            return session;
        }
        
    }
}