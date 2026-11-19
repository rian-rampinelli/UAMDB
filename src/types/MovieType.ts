export type MediaResult = {
    id: number;
    media_type: "movie" | "tv" | "person";
    title?: string;
    name?: string;
    poster_path?: string | null;
    profile_path?: string | null;
    known_for_department?: string;
    overview?: string;
};