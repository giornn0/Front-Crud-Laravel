export interface Film{
    film_id: number,
    title:string,
    description:string,
    release_year: number,
    language: number,
    original_language: number,
    rental_duration:number,
    rental_rate: number,
    length: string,
    replacement_cost:number,
    rating:string,
    special_features:string,
    portrait: Blob
}