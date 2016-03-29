import {Pipe, PipeTransform} from 'angular2/core';
/*
 * generate array of values from object
*/
@Pipe({ name: 'objValues', pure: false })
export class ObjValuesPipe implements PipeTransform {
    temp = [];
    transform(value: any, args: any[] = null): any {
        var $this = this; // save this
        $this.temp.length = 0;
        let keys = args[2] || Object.keys(value);
        let callbacks = args[0];
        let hideID = args[1];
        // console.log('keys are', keys);
        // console.log('callbacks ', callbacks);
        keys.forEach(function(val) {

            if (val === '_id' && hideID) {
                return;
            }

            let tmpResult = value[val];
            let callback = callbacks[val];
            if (typeof callback === 'function') {
                tmpResult = callback(tmpResult);
            }

            $this.temp.push(tmpResult);
        });
        console.log('finished ----------------------------- ');
        return $this.temp;
    }
}
