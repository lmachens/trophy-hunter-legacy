import SCORES from '../scores';

const silverBullets = {
  name: 'silverBullets',
  title: 'SilverBullets',
  description: 'Deal more physical damage to champions than anyone else total damage to champions.',
  svgPath:
    'M346.12-.2l-.233.28h.568c-.112-.093-.222-.188-.334-.28zM52.747 18.77c166.38 72.215 298.08 157.962 373.818 254.734-63.44 81.172-164.48 155.274-291.498 220.543h40.022c79.295-43.115 147.887-89.96 202.66-140.547-39.11 50.436-88.187 97.396-144.996 140.547h30.434c80.09-63.988 144.264-136.234 185.377-216.305l2.19-4.267-2.19-4.268C399.403 173.463 315.916 89.895 211.035 18.77h-33.93c80.457 51.6 148.82 109.986 199.942 174.582C305.687 128.537 210.47 70.408 98.512 18.77H52.746zm286.88 0c79.86 68.252 124.905 149.72 132.544 232.044 7.757 83.595-22.736 168.59-96.772 243.233h25.79c20.766-22.77 37.913-46.547 51.498-70.985-7.558 24.488-17.123 48.273-28.764 70.985h20.875c72.31-148.76 61.655-336.513-17.764-475.277H405.36c20.056 33.13 35.904 69.555 47.333 107.822-20.603-38.094-49.095-74.45-84.986-107.822h-28.082zm-320.34 81.582v18.7c98.913.57 192.13 33.895 275.816 93.31-83.698-43.07-176.986-67.33-275.815-67.747V163.3c126.328.548 243.07 41.285 341.934 111.155C261.996 345.35 146.23 388.97 19.288 389.56v18.678c97.076-.436 187.874-25.23 269.824-67.6-82.075 58.517-172.797 92.57-269.823 93.17V452.5c138.463-.82 264.086-66.947 369.64-172.195l6.66-6.64-6.687-6.618C283.584 162.795 156.815 101.115 19.287 100.35zM200.82 236.287v80.28c48.162 0 91.948-15.602 128.977-40.797-36.904-24.93-81.09-39.485-128.977-39.483zm-164.19.54v79.202h22.33v-79.202H36.63zm41.018 0v79.202h101.645l.002-79.202H77.648zM138.7 512.735l.19.368c.238-.122.474-.246.714-.368h-.903z',
  score: SCORES.MEDIUM,
  obtainedCheck: ({ match }) =>
    match.participant.stats.physicalDamageDealtToChampions >=
    match.participant.stats.others.maxTotalDamageDealtToChampions,
  context: 'matches',
  attribute: 'power'
};

export default silverBullets;
