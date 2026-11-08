import type { Podcast } from "./podcast";

export default class PodcastRepository {
    static _podcastsArray: Array<Podcast> = [];

    readPodcasts(): Array<Podcast> {
        return PodcastRepository._podcastsArray;
    }

    createPodcast(podcast: Podcast): boolean {
        const podcastsCount = PodcastRepository._podcastsArray.length;
        podcast.id = podcastsCount + 1;
        const newPodcastsLenght = PodcastRepository._podcastsArray.push(podcast);
        return podcastsCount < newPodcastsLenght;
    }

    readPodcastById(podcastId: Number): Podcast {
        return PodcastRepository._podcastsArray.filter((podcast) => { return podcast.id == podcastId; })[0];
    }

    updatePodcastById(podcastId: Number, podcastNewData: Podcast): boolean {
        const podcastIndex = PodcastRepository._podcastsArray.indexOf(this.readPodcastById(podcastId));
        if (podcastIndex == -1)
            return false;

        PodcastRepository._podcastsArray[podcastIndex] = podcastNewData;

        return true;
    }

    deletePodcastById(podcastId: Number): boolean {
        const podcastIndex = PodcastRepository._podcastsArray.indexOf(this.readPodcastById(podcastId));
        if (podcastIndex == -1)
            return false;

        const arr = PodcastRepository._podcastsArray.splice(podcastIndex, 1);

        return arr.length > 0;
    }
}
