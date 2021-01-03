const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const formatReadableDate = (date)=> {return (new Date(date)).toLocaleDateString(undefined, options) } 

//2020-05-23T07:11:02.811Z to 2020-05-13
const CurrentDate=(datetime=new Date())=>{return datetime.toISOString().split('T')[0]}

//2020-05-23T07:11:02.811Z to 2020-06-13
 const AddSomeDateWithDate =({datetime=new Date(),numberOfDaysToAdd=1})=>{
      datetime.setDate(datetime.getDate() + numberOfDaysToAdd)
      return datetime.toISOString().split('T')[0]
}

const SecondDifferenceBetweenToDate= datetime =>{
    var t2 = new Date(datetime);
    var t1 = new Date(Date.now());
    var dif = t1.getTime() - t2.getTime();
    var Seconds_from_T1_to_T2 = dif / 1000;

   return Math.floor(Seconds_from_T1_to_T2);
}

const  DateDiffrenceBetweenToDate=datetime=>{
    var t2 = new Date(datetime);
    var t1 = new Date(Date.now());
    var dif = t1.getTime() - t2.getTime();
    var Date_from_T1_to_T2 = dif / (1000*60*60*24);
   return Math.floor(Date_from_T1_to_T2)
}

const  dateSplitReverse= str =>{
    return str.split("-").reverse().join("-");
   }

const format= str => {
    return str.toString().length === 1 ? '0' + str : str;
}
const getTimeStampToDateTime = str =>{
    var date = new Date(str);
    return date.toDateString() +' '+ date.toLocaleTimeString()
}

const  getTimeStampAfterSubtructSomeDays= (str = new Date(),subtructDate=2) =>{
    var date1 = new Date(str);
    var daysPrior = 2;
    date1.setDate(date1.getDate() - daysPrior);
    return date1.toISOString();
}
const  getFormattedDate= str => {

    const todayTime = new Date(str);
    const month = this.format(todayTime .getMonth() + 1);
    const day = this.format(todayTime .getDate());
    const year = (todayTime .getFullYear());
    return day + "/" + month + "/" + year;

}

const toDate= dateStr => {

    const [ day, month, year ] = dateStr.split("/");
    return new Date(year, month - 1, day).toISOString();

}
const genRandom = () => {
    return  Math.floor(100000 + Math.random() * 900000);
}
//2020-08-14T18:00:00.000Z to  2020-08-14
const getTimeStampToYearMonthDate = (str=null) => str?str.split("T")[0]:''

const AnyCommonValueExistInTwoArray =(arr1, arr2) => arr1.some(item => arr2.includes(item)) 


export { genRandom,toDate,getFormattedDate,getTimeStampAfterSubtructSomeDays,format,dateSplitReverse,DateDiffrenceBetweenToDate,
    SecondDifferenceBetweenToDate,AnyCommonValueExistInTwoArray,getTimeStampToYearMonthDate,formatReadableDate,
    CurrentDate,AddSomeDateWithDate}