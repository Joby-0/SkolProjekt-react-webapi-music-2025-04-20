



export default function musciApiService(url) {

    this.url = url;

    this.getData = async function ( currentPage, currentFilter,url) {


        url = this.url + `/MusicGroup/Read?seeded=true&flat=true&pageSize=10`;

        if (currentFilter) {
            url += `&filter=${encodeURIComponent(currentFilter)}`;
        }

        url += `&pageNr=${currentPage}`;

        let response = await fetch(url);

        let data = await response.json();
        console.log(data);
        
        return data;
    }
    this.viewItem = async function (id, url) {
        url = this.url + `/MusicGroup/ReadItem?id=${id}&flat=false`;
        let response = await fetch(url);

        let data = await response.json();
        console.log(data);
        
        return data;
        
    }


}