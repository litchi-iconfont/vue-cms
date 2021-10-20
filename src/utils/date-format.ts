import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc)

const DETE_TIME_FORMAT="YYYY-MM-DD HH:mm:ss"

export function formatUtcString(utc:string,format:string=DETE_TIME_FORMAT){
return dayjs.utc(utc).format(format)
}