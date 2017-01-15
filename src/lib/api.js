import dateFormat from 'dateformat'


export default class Api {
  static headers() {
    return {

    }
  }

  static get(route) {
    return this.xhr(route, null, 'GET');
  }

  static put(route, params) {
    return this.xhr(route, params, 'PUT')
  }

  static post(route, params) {
    return this.xhr(route, params, 'POST')
  }

  static delete(route, params) {
    return this.xhr(route, params, 'DELETE')
  }

  static xhr(route, params, verb) {
    const host = 'http://api.programme-tv.net'
    const url = `${host}${route}`
    let options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null );
    options.headers = Api.headers()
    return fetch(url, options).then( resp => {
      let json
      if (resp.ok) {
        try {
          json = resp.json() || JSON.parse(resp._bodyText)
        } catch(e){
          console.log('error parsing json resp')
        }
        return json
      }
      return json.then(err => {throw err});
    }).then( json => json );
  }
  

  static getMovies(type) {

    const today = dateFormat(new Date(), "yyyy-mm-dd")

    const types = {
      early: `/1326279455-10/getPrime/?date=${today}&periode=prime1&bouquetId=2`,
      late: `/1326279455-10/getPrime/?date=${today}&periode=prime2&bouquetId=2`,
      now: `/1326279455-10/getEnCeMoment/?bouquetId=2`
    }

    const uri = types[type || 'early']
    // const params = [''].join('&')  

    return this.get(uri)
  }
}
