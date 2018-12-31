import AvatarItem from '/imports/ui/components/store/AvatarItem';
import FeedbackItem from '/imports/ui/components/store/FeedbackItem';
import LotteryItem from '/imports/ui/components/store/LotteryItem';
import ReferrerItem from '/imports/ui/components/store/ReferrerItem';
import StreamOverlayItem from '/imports/ui/components/store/StreamOverlayItem';
import TShirtArtworkItem from '/imports/ui/components/store/TShirtArtworkItem';
import TwitchItem from '/imports/ui/components/store/TwitchItem';
import YouTubeItem from '/imports/ui/components/store/YouTubeItem';

export default [
  {
    name: 'lottery',
    img: 'images/lottery.png',
    title: 'Riot Points Lottery',
    subtitle: 'Join our lottery and win Riot Points',
    component: LotteryItem
  },
  {
    name: 'feedback',
    img: 'images/feedback.png',
    title: 'Help us to improve this app',
    trophyPoints: 500,
    component: FeedbackItem
  },
  {
    name: 'referrer',
    img: 'images/referrer.png',
    title: 'Referrer',
    trophyPoints: 500,
    component: ReferrerItem
  },
  {
    name: 'patreon',
    img: 'images/patreon.png',
    title: 'Become a Patreon to disable the ads',
    trophyPoints: 500,
    onClick: () => {
      window.postMessage(
        {
          overwolf: true,
          type: 'openPatreon'
        },
        '*'
      );
    }
  },
  {
    name: 'youTube',
    img: 'images/youTube.png',
    title: 'Add a link to your YouTube channel',
    trophyPoints: -1000,
    component: YouTubeItem
  },
  {
    name: 'twitch',
    img: 'images/twitch.png',
    title: 'Add a link to your Twitch channel',
    trophyPoints: -1000,
    component: TwitchItem
  },
  {
    name: 'streamOverlay',
    img: 'images/hud.png',
    title: 'Awesome overlay for your stream',
    trophyPoints: -2000,
    component: StreamOverlayItem,
    isDownloadable: true
  },
  {
    name: 'tShirtArtwork',
    img: 'images/tshirt.png',
    title: 'Print your own T-Shirt',
    trophyPoints: -1000,
    component: TShirtArtworkItem,
    isDownloadable: true
  },
  {
    name: 'avatar',
    img: 'images/avatar.png',
    title: 'Customize your avatar',
    trophyPoints: -1000,
    component: AvatarItem
  } /*,
  {
    name: 'signature',
    img: 'images/signature.png',
    title: 'Create your own signature',
    trophyPoints: -1000,
    component: LoadableSignatureItem
  }*/
];
