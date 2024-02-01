class User {
    constructor(){
        this.id;
        this.nama;
        this.email;
        this.password;
    }

    static find(id){
        var user = new User;
        $.ajax({
            url: "/user/"+id,
            type: "GET",
            async:false,
            success:function(data){
                user=User.parse(data)
            }
        })
        return user
    }
    static parse(json){
        var user = new User

        user.id=json["id"]
        user.nama=json["nama"]
        user.email=json["email"]
        user.password=json["password"]
        return user;
    }
    static all(){
        var user = [];
        $.ajax({
            url: "/user/",
            type: "GET",
            async:false,
            success:function(data){
                user=data.map(function(e){
                    return User.parse(e)
                    
                })
            }
        })
        return user;
    }
}