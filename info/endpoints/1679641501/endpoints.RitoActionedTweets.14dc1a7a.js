(self.webpackChunk_twitter_responsive_web=self.webpackChunk_twitter_responsive_web||[]).push([["endpoints.RitoActionedTweets"],{77828:e=>{e.exports={queryId:"hzW2lbKKjPLM9wvuVOBs6A",operationName:"RitoActionedTweetsTimeline",operationType:"query",metadata:{featureSwitches:["responsive_web_twitter_blue_verified_badge_is_enabled","responsive_web_graphql_exclude_directive_enabled","verified_phone_label_enabled","responsive_web_graphql_timeline_navigation_enabled","responsive_web_graphql_skip_user_profile_image_extensions_enabled","tweetypie_unmention_optimization_enabled","vibe_api_enabled","responsive_web_edit_tweet_api_enabled","graphql_is_translatable_rweb_tweet_is_translatable_enabled","view_counts_everywhere_api_enabled","longform_notetweets_consumption_enabled","tweet_awards_web_tipping_enabled","freedom_of_speech_not_reach_fetch_enabled","standardized_nudges_misinfo","tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled","interactive_text_enabled","responsive_web_text_conversations_enabled","longform_notetweets_richtext_consumption_enabled","responsive_web_enhance_cards_enabled"]}}},56563:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>d,isFatalRitoActionedTweetsTimelineError:()=>l});var _=i(72599),n=i(17360),s=i(83175),r=i(77828),o=i.n(r),a=i(82249);const l=(e,t)=>{var i;const s=null==t||null==(i=t.user_result_by_rest_id)?void 0:i.result;return s||(0,_.ZP)("GQL RitoActionedTweets: Failed to query for Rito Actioned Tweets timeline"),!s&&(0,n.jB)(e)},d=({apiClient:e,featureSwitches:t})=>({fetchRitoActionedTweets:({cursor:i,userId:_})=>e.graphQL(o(),{cursor:i,rest_id:_,...(0,s.d)(t),withSafetyModeUserFields:t.isTrue("rito_safety_mode_blocked_profile_enabled")},l).then((e=>{var t;const i=null==e||null==(t=e.user_result_by_rest_id)?void 0:t.result;let _=a.cY;var n;"User"===(null==i?void 0:i.__typename)&&(_=null==(n=i.rito_actioned_tweets_timeline)?void 0:n.timeline);return _||a.cY}))})},83175:(e,t,i)=>{"use strict";i.d(t,{S:()=>r,d:()=>s});var _=i(60917),n=i.n(_);const s=e=>{const t=e.isTrue("responsive_web_reactions_enabled");return{...r(e),withDownvotePerspective:e.isTrue("rweb_reply_downvote_enabled"),withReactionsMetadata:t,withReactionsPerspective:t}},r=e=>n()}}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/endpoints.RitoActionedTweets.14dc1a7a.js.map