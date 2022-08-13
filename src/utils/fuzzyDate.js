export function fuzzyDate(date) {
    var delta = Math.round((new Date() - new Date(date)) / 1000);

    var minute = 60,
        hour = minute * 60,
        day = hour * 24,
        week = day * 7;

    let fuzzy;

    if (delta < 30) {
        fuzzy = 'just now';
    } else if (delta < minute) {
        fuzzy = delta + ' seconds ago';
    } else if (delta < 2 * minute) {
        fuzzy = 'a minute ago'
    } else if (delta < hour) {
        fuzzy = Math.floor(delta / minute) + ' minutes ago';
    } else if (Math.floor(delta / hour) == 1) {
        fuzzy = '1 hour ago'
    } else if (delta < day) {
        fuzzy = Math.floor(delta / hour) + ' hours ago';
    } else if (delta < day * 2) {
        fuzzy = 'yesterday';
    } else if (delta < week) {
        fuzzy = Math.floor(delta / day) + ' days ago';
    }
    else {
        fuzzy = Math.floor(delta/week) + ' weeks ago';
    }
    return fuzzy;
}