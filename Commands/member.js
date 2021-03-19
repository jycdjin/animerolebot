module.exports = {
    name: 'member',
    description: "Gives the member role!!",
    execute(message, args) {

        let role = message.guild.roles.cache.find(r => r.name === "𐐪 member 𐑂🌸");

        if(message.member.roles.cache.some(r => r.name === "𐐪 member 𐑂🌸")){
             message.channel.sent('You now have this role!')


        } else {
            message.channel.send('Let me be nice and give you this role');
            message.member.roles.add(role).catch(console.error);
        }
    }
}