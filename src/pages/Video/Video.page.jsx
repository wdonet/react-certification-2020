import React, { useEffect, useState } from 'react';
import { IoWifi } from 'react-icons/io5';
import { useHistory, useParams } from 'react-router';
import { YoutubeApi } from '../../api/youtube';
import RecomendedCard from '../../components/RecomendedCard';
import { useSearch } from '../../providers/Search';
import { formatDate } from '../../utils/fns';
import {
  Container,
  VideoContainer,
  RecommendedItem,
  RecommendedList,
  VideoInfo,
  VideoPlayerContainer,
  VideoPlayer,
  Tag,
  TagListItem,
  TagList,
  VideoData,
  DescriptionTitle,
  DescriptionLogo,
  Description,
  ChannelSubtitle,
  BroadcastContent,
  ChannelTitle,
} from './Video.styles';

const VideoPage = () => {
  const { id } = useParams();
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [video, setVideo] = useState({});
  const [channel, setChannel] = useState({});
  const { search } = useSearch();
  const history = useHistory();
  const autoplay = 1;

  useEffect(() => {
    const fetchData = () => {
      YoutubeApi.related(id).then((related) => {
        setRelatedVideos(related.items);
      });
      YoutubeApi.detail(id).then((detail) => {
        setVideo(detail.items[0]);
        const { channelId } = detail.items[0].snippet;
        YoutubeApi.channel(channelId).then((result) => {
          setChannel(result.items[0]);
        });
      });
    };

    fetchData();
  }, [id]);

  const searchTag = (query) => {
    search(query);
    history.push('/');
  };

  return (
    <Container>
      <VideoContainer>
        <VideoPlayerContainer>
          <VideoPlayer
            data-testid="video-player"
            title="video"
            src={`https://www.youtube.com/embed/${id}?autoplay=${autoplay}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoPlayerContainer>
        <VideoInfo data-testid="video-info">
          {video.snippet?.liveBroadcastContent !== 'none' ? (
            <BroadcastContent>
              <IoWifi />
              {video.snippet?.liveBroadcastContent}
            </BroadcastContent>
          ) : (
            ''
          )}
          <h2>{video.snippet?.title}</h2>
          <VideoData>{video.statistics?.viewCount} Views</VideoData>
          <VideoData>{formatDate(video.snippet?.publishedAt)}</VideoData>
          <TagList>
            {video.snippet?.tags?.map((tag) => {
              return (
                <TagListItem key={`${tag}`}>
                  <Tag
                    type="button"
                    onClick={() => searchTag(tag)}
                    data-testid="tag-button"
                  >
                    {tag}
                  </Tag>
                </TagListItem>
              );
            })}
          </TagList>
          <hr />
          <div>
            <DescriptionTitle>
              <DescriptionLogo
                src={channel.snippet?.thumbnails?.default.url}
                alt="channel"
              />
              <hgroup>
                <ChannelTitle>{channel.snippet?.title}</ChannelTitle>
                <ChannelSubtitle>
                  {channel.statistics?.subscriberCount} Subscribers
                </ChannelSubtitle>
              </hgroup>
            </DescriptionTitle>
            <Description>{video.snippet?.description}</Description>
          </div>
        </VideoInfo>
      </VideoContainer>
      <RecommendedList data-testid="related-videos">
        {relatedVideos
          .filter((relatedVideo) => relatedVideo.snippet)
          .map(
            ({
              etag,
              id: { videoId },
              snippet: { title, channelTitle, thumbnails, liveBroadcastContent },
            }) => {
              return (
                <RecommendedItem key={etag}>
                  <RecomendedCard
                    id={videoId}
                    title={title}
                    channel={channelTitle}
                    thumbnail={thumbnails.medium.url}
                    liveBroadcastContent={liveBroadcastContent}
                  />
                </RecommendedItem>
              );
            }
          )}
      </RecommendedList>
    </Container>
  );
};

export default VideoPage;
