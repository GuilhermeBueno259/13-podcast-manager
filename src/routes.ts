import PodcastController from "./controller/podcastController";

export const routes : Array<{
    method: String,
    path: RegExp,
    handler: Function
}> = [
    {
        method: "GET",
        path: /^\/api\/v1\/podcast\/([^\/]+)$/,
        handler: PodcastController.prototype.readPodcastById
    },
    {
        method: "GET",
        path: /^\/api\/v1\/podcast/,
        handler: PodcastController.prototype.readPodcasts
    },
    {
        method: "POST",
        path: /^\/api\/v1\/podcast/,
        handler: PodcastController.prototype.createPodcast
    },
    {
        method: "PUT",
        path: /^\/api\/v1\/podcast\/([^\/]+)$/,
        handler: PodcastController.prototype.updatePodcast
    },
    {
        method: "DELETE",
        path: /^\/api\/v1\/podcast\/([^\/]+)$/,
        handler: PodcastController.prototype.deletePodcast
    },
];