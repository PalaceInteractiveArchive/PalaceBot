import * as amqp from 'amqplib/callback_api';
import Rank from './ranks';
import { DiscordBot } from './server';

export default class MessageQueue {
    private discordInstance: DiscordBot

    constructor(instance: DiscordBot) {
        this.discordInstance = instance;
    }

    public initQueue() {
        amqp.connect({
            //@ts-ignore
            hostname: process.env.mqHost,
            //@ts-ignore
            port: process.env.mqPort,
            username: process.env.mqUser,
            password: process.env.mqPassword,
            vhost: process.env.mqVhost,
        }, (err: any, conn: amqp.Connection) => {
            if (err) {
                throw err;
            }
            conn.on("error", (e: any) => { console.log(e); setTimeout(this.initQueue, 2000) });
            conn.createChannel((err1: any, chan: amqp.Channel) => {
                if (err1) {
                    throw err1;
                }
                let queue = 'bot-networking';
                chan.assertQueue(queue, {
                    durable: true,
                    autoDelete: false
                });
                console.log('Listening for messages on queue "bot-networking"!');
                chan.consume(queue, (msg: amqp.Message) => {
                    try {
                        if (msg.content) {
                            var packet = JSON.parse(msg.content.toString());
                            if (packet.id === 1) {
                                let update = true;
                                let roles: Rank[] = [];
                                switch (packet.rank) {
                                    case "guest":
                                        roles.push(Rank.Guest);
                                        roles.push(Rank.VerifiedMember);
                                        break;
                                    case "passholder":
                                        roles.push(Rank.Passholder);
                                        roles.push(Rank.PremiumMember);
                                        roles.push(Rank.VerifiedMember);
                                        break;
                                    case "premierpassport":
                                        roles.push(Rank.Passport);
                                        roles.push(Rank.PremiumMember);
                                        roles.push(Rank.VerifiedMember);
                                        break;
                                    case "dvc":
                                        roles.push(Rank.DVC);
                                        roles.push(Rank.PremiumMember);
                                        roles.push(Rank.VerifiedMember);
                                        break;
                                    case "club33":
                                        roles.push(Rank.C33);
                                        roles.push(Rank.PremiumMember);
                                        roles.push(Rank.VerifiedMember);
                                        break;
                                    case "shareholder":
                                        roles.push(Rank.Shareholder);
                                        roles.push(Rank.PremiumMember);
                                        roles.push(Rank.VerifiedMember);
                                        break;
                                    default:
                                        update = false;
                                        break;
                                }
                                let tags = [...packet.tags];
                                let tagLoop = new Promise((resolve: any, reject: any) => {
                                    tags.forEach((tag: String, index: Number) => {
                                        switch (tag) {
                                            case "sponsor_obsidian":
                                                roles.push(Rank.SponsorObsidian);
                                                roles.push(Rank.ParkSponsors);
                                                break;
                                            case "sponsor_emerald":
                                                roles.push(Rank.SponsorEmerald);
                                                roles.push(Rank.ParkSponsors);
                                                break;
                                            case "sponsor_diamond":
                                                roles.push(Rank.SponsorDiamond);
                                                roles.push(Rank.ParkSponsors);
                                                break;
                                            case "sponsor_lapis":
                                                roles.push(Rank.SponsorLapis);
                                                roles.push(Rank.ParkSponsors);
                                                break;
                                            case "sponsor_gold":
                                                roles.push(Rank.SponsorGold);
                                                roles.push(Rank.ParkSponsors);
                                                break;
                                            case "sponsor_iron":
                                                roles.push(Rank.SponsorIron);
                                                roles.push(Rank.ParkSponsors);
                                                break;
                                            case "guide":
                                                roles.push(Rank.Guide);
                                                roles.push(Rank.GuestVolunteer);
                                                break;
                                            case "designer":
                                                roles.push(Rank.Designer);
                                                roles.push(Rank.GuestVolunteer);
                                                break;
                                            default:
                                                break;
                                        }
                                        if (index === tags.length -1) resolve();
                                    });
                                    if (tags.length == 0) resolve();
                                })

                                tagLoop.then(() => {
                                    if (update) {
                                        this.discordInstance.setUserRole(roles, packet.user, packet.username)
                                    }
                                })
                            }
                        }
                    } catch (e) {
                        console.error(e)
                    }
                }, {noAck: true})
            })

        })
    }
}