export type ActivityStatus = 'draft' | 'published' | 'confirmed' | 'sold-out' | 'done' | 'cancelled';

export type Activity = {
    id:number;
    name:string;
    slug:string;
    price:number;
    date: Date;
    duration:number;
    location:string;
    maxParticipants:number;
    minParticipants:number;
    status:ActivityStatus;
    userId:number;
}

export const NULL_ACTIVITY: Activity = {
    id:0,
    name:'',
    slug:'',
    price:0,
    date: new Date(),
    duration:0,
    location:'',
    maxParticipants:0,
    minParticipants:0,
    status:'draft',
    userId:0
}