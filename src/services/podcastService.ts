import type { Podcast } from "../data/podcast";
import PodcastRepository from "../data/podcastRepository";

export default class PodcastService {

    podcastRepository: PodcastRepository = new PodcastRepository();

    createPodcast(podcastData: Podcast) {
        PodcastRepository.prototype.createPodcast(podcastData);
    }

    readPodcast(podcastId: Number) {
        return PodcastRepository.prototype.readPodcastById(podcastId);
    }

    readPodcasts() {
        return PodcastRepository.prototype.readPodcasts();
    }

    updatePodcast(podcastId: Number, podcastNewData: Podcast) {
        PodcastRepository.prototype.updatePodcastById(podcastId, podcastNewData);
    }

    deletePodcast(podcastId: Number) {
        PodcastRepository.prototype.deletePodcastById(podcastId);
    }
}
