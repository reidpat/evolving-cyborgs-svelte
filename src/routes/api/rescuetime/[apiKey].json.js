export async function get({params}) {

    // const apiKey = event.url.searchParams.get('apiKey');
    let {apiKey} = params; 
    // let apiKey = 'B63kBn8uoKgUTWrL_AMk3ACIc8_JNz91IGCy4U9B';
    // let url = 
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()

    let isoDate = `${year}-${month}-${day}`;

    // let url = `https://www.rescuetime.com/anapi/daily_summary_feed?key=${apiKey}&restrict_begin=${isoDate}`;
    let url = `https://www.rescuetime.com/anapi/data?key=${apiKey}&perspective=interval&restrict_kind=productivity&interval=day&restrict_begin=${isoDate}&restrict_end=${isoDate}&format=json`
    const res = await fetch(url) 
    const data = await res.json();

    return { body: data };    
}