import { read } from "fs";
import type { Podcast } from "../data/podcast";
import PodcastService from "../services/podcastService";

export default class PodcastController {
    createPodcast(podcastData: Podcast) {
        PodcastService.prototype.createPodcast(podcastData);
    }

    readPodcastById(requestData: any) {
        return PodcastService.prototype.readPodcast(requestData.id);
    }

    readPodcasts() {
        return PodcastService.prototype.readPodcasts();
    }

    updatePodcast(requestData: any) {
        let podcastId = requestData.id;
        let podcastNewData: Podcast = requestData;
        PodcastService.prototype.updatePodcast(podcastId, podcastNewData);
    }

    deletePodcast(requestData: any) {
        let podcastId: Number = requestData.id;
        PodcastService.prototype.deletePodcast(podcastId);
    }
}
