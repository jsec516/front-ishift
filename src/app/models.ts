export class Event {
    id: string;
    clinic_id: string;
    patient: any;
    staff: any;
    service: any;
    schedule: any;
    other: any;
    type: string;
    status: number;
    created_at: string;
    updated_at: string;

    constructor(obj?: any) {
        this.id = obj && obj.id || null;
        this.clinic_id = obj && obj.clinic_id || null;
        this.patient = obj && obj.patient || null;
        this.service = obj && obj.service || null;
        this.staff = obj && obj.staff || null;
        this.schedule = obj && obj.schedule || null;
        this.other = obj && obj.other || null;
        this.type = obj && obj.type || null;
        this.status = obj && obj.status || null;
        this.created_at = obj && obj.created_at || null;
        this.updated_at = obj && obj.updated_at || null;
    }
}


export class Resource {
    id: string;
    title: string;
    shareable: number;
    others: any;
    type: string;
    clinic_id: string;
    status: number;
    created_at: string;
    updated_at: string;
    modified_by: any;

    constructor(obj?: any) {
        this.id = obj && obj.id || null;
        this.clinic_id = obj && obj.clinic_id || null;
        this.title = obj && obj.title || null;
        this.shareable = obj && obj.shareable || 1;
        this.others = obj && obj.others || {};
        this.type = obj && obj.type || 'room';
        this.status = obj && obj.status || 1;
        this.created_at = obj && obj.created_at || null;
        this.updated_at = obj && obj.updated_at || null;
    }
}


export class Staff {
    id: string;
    constructor(obj?: any) {
        this.id = obj && obj.id || null;
    }
    
    /*====== schema ====*/
    schema = {
        id: 1,
        name: 'Rebecca Risk',
        clinic_id: 2,
        permissions: {
            'take_appointment': true,
            'mod_calendar': true
        },
        security_role: '',
        status: 1,
        email: 'rrisk@gmail.com',
        password: '334',
        verification_key: '333',
        working_hours: [
            {
                'expired': true,
                'start_date': '22/2/2015',
                'end_date': '22/8/2015',
                'mon': { 'start': '08:00AM', 'end': '05:00PM' },
                'tue': { 'start': '08:00AM', 'end': '05:00PM' },
                'wed': { 'start': '08:00AM', 'end': '05:00PM' },
                'thu': { 'start': '08:00AM', 'end': '05:00PM' },
                'fri': { 'start': '08:00AM', 'end': '05:00PM' }
            },
            {
                'expired': false,
                'start_date': '22/1/2016',
                'end_date': '22/2/2016',
                'mon': { 'start': '08:00AM', 'end': '05:00PM' },
                'tue': { 'start': '08:00AM', 'end': '05:00PM' },
                'wed': { 'start': '08:00AM', 'end': '05:00PM' },
                'thu': { 'start': '08:00AM', 'end': '05:00PM' },
                'fri': { 'start': '08:00AM', 'end': '05:00PM' }
            }
        ]
    }
}

export class Schedule {
    id: string;
    subject: any;
    slots: Array<{ day: any, from: string, to: string }>;
}

export class Treatment {
    id: string;
}

export class Vacation {
    id: string;
}

export class Patient {
    id: string;
}
