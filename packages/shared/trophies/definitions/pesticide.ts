import SCORES from '../scores';

const pesticide = {
  name: 'pesticide',
  title: 'Pesticide',
  description: 'Kill more than 400 minions.',
  svgPath:
    'M305.105 21.24l-4.4.137-.156.006-.157.01-5.454.35-.155.01-.154.017-5.413.53-.153.014-.152.022-3.353.44 2.33 17.75c-5.88.717-11.674 1.738-17.34 3.042l-4.51-17.04-4.593 1.218-.142.037-.143.043-5.057 1.512-.14.04-.14.048-4.975 1.662-.14.047-.14.05-3.205 1.186 5.975 16.17c-5.655 1.98-11.12 4.246-16.334 6.786l-7.819-14.898-3.12 1.638-.137.073-.135.075-4.342 2.467-.137.076-.134.084-4.213 2.586-.14.084-.133.088-4.08 2.7-.137.093-.134.095-.274.196 9.56 13.386c-1.06.7-2.11 1.408-3.14 2.133-3.825 2.694-7.442 5.586-10.804 8.656l-11.266-11.59-3.305 3.21-.137.133-.13.14-3.135 3.306-.137.14-.13.15-2.954 3.392-.135.154-.128.16-2.767 3.473-.1.124-.094.127-.348.47 12.943 9.613c-3.468 4.682-6.368 9.65-8.592 14.866l-3.86-1.695-11.034-5.2-.034.07-.055.115-.05.115-.84 1.918-.052.117-.05.12-.782 1.93-.05.122-.046.123-.73 1.945-.044.125-.042.127-.67 1.96-.045.126-.04.13-.612 1.972-.04.13-.038.133-.55 1.985-.038.132-.033.137-.49 1.994-.034.14-.032.14-.427 2.005-.032.14-.025.14-.367 2.018-.026.143-.02.143-.003.004 9.37 1.407 7.32 1.333c-.182 1.355-.32 2.722-.41 4.1-.26 3.98-.103 8.003.454 12.05l-17.11 2.436.288 2.01.022.15.025.15.37 2.1.026.15.03.15.442 2.1.03.15.037.148.512 2.105.035.147.04.144.59 2.112.038.142.045.145.662 2.11.043.144.05.138.735 2.116.05.14.052.136.813 2.117.05.135.057.133.504 1.198 15.906-6.678c2.016 4.97 4.667 9.942 7.957 14.885l-13.622 9.9 1.172 1.61.072.1.074.097 1.618 2.106.072.095.076.094 1.7 2.1.075.092.077.088 1.787 2.096.075.088.076.086 1.874 2.09.076.084.076.082 1.96 2.084.076.08.078.078 2.047 2.08 6.683-6.586-6.56 6.707 1.19 1.164 11.26-11.51c3.796 3.988 8.03 7.935 12.73 11.82.316.26.645.54.962.803L209.36 205.52l2.626 2.52.024.023.023.02 10.936 10.34 12.012-12.704c4.512 3.977 9.152 8.175 13.868 12.528l-12.297 13.014 4.898 4.63.027.022 8.607 8.19 12.393-13.024c4.525 4.353 9.006 8.765 13.425 13.2l-12.484 12.7 7.65 7.52.057.057.008.007 4.572 4.584.053.053.808.825 12.483-12.252c.584.618 1.18 1.24 1.76 1.854 3.862 4.106 7.563 8.152 11.067 12.096l-12.582 11.566 3.314 3.603.052.06.04.04 3.69 4.134.03.035 3.348 3.883.037.045 1.527 1.846 12.89-10.666c1.753 2.182 3.42 4.31 4.94 6.337 2.577 3.438 4.74 6.727 6.492 9.633l-13.963 8.705.854 1.37.742 1.304.677 1.284.55 1.137.463 1.077.366.96.244.777.162.644.125.738.51 3.65.013.093.016.094.13.822 15.974-2.56c1.218 6.126 2.603 11.95 4.164 17.435l-16.104 4.384.63 2.307.026.103.03.1.986 3.327.03.104.034.103 1.047 3.252.033.105.036.103 1.105 3.176.037.107.04.107 1.163 3.098.04.107.044.107 1.03 2.54 15.567-6.29c.872 2.125 1.774 4.186 2.717 6.163 1.586 3.33 3.277 6.47 5.088 9.395l-1.06.695-13.106 8.033.1.163.075.124.08.12 1.576 2.397.082.128.088.123 1.62 2.302.09.13.094.124 1.664 2.203.098.13.104.127 1.707 2.1.107.134.113.13 1.748 1.998.12.135.12.13 1.79 1.893.126.135.133.13 1.49 1.46 11.7-11.954c3.04 2.732 6.347 4.986 9.978 6.664 1.13.522 2.287.952 3.46 1.33l-6.692 16.184.717.296.242.1.246.086 2.12.74.252.088.258.074 2.145.614.263.076.268.058 2.168.487.27.06.277.045 2.192.354.28.045.28.03 2.212.222.283.026.285.012 2.232.088.285.01.283-.007 2.252-.05.285-.005.28-.024 2.27-.186.282-.024.277-.04h.007l-1.344-9.378-.724-8.752c4.692-.622 9.423-2.18 13.975-4.626l8.97 15.51 1.104-.637.19-.11.184-.12 2.37-1.522.177-.114.173-.122 2.373-1.68.164-.117.158-.122 2.377-1.843.153-.118.146-.123 2.38-2.004.138-.117.135-.123 2.378-2.17.13-.117.122-.12 1.676-1.646-12.256-12.482c3.87-3.678 7.698-8.023 11.514-13.04l13.763 10.13.496-.674.075-.1.074-.106 2.345-3.377.07-.1.067-.103 2.336-3.557.064-.097.06-.1 2.325-3.74.058-.094.057-.096 2.313-3.923.052-.09.05-.09.257-.46-14.492-8.11c1.246-2.032 2.496-4.127 3.748-6.31v-.003c1.855-3.236 3.607-6.462 5.303-9.682l14.457 7.264 1.486-2.957.047-.095.045-.095 3.115-6.567.047-.096.043-.1 2.916-6.53.044-.1.043-.1.37-.884-14.622-6.125c2.56-5.707 4.883-11.382 6.963-17.016l14.638 5.328.397-1.09.04-.105.034-.108 2.148-6.38.038-.108.033-.11 1.965-6.338.034-.11.03-.113 1.134-4.003-14.79-4.185c1.718-5.954 3.176-11.854 4.386-17.698l14.937 3.032.56-2.75.023-.117.022-.12 1.078-6.112.02-.117.02-.118.907-6.065.017-.12.016-.12.436-3.518-15.072-1.864c.757-6.133 1.24-12.19 1.465-18.164l15.162.674.07-1.6.006-.123.003-.123.106-5.8v-.245l-.048-5.742-.002-.123-.004-.123-.193-5.545-15.2.53c-.31-6.098-.902-12.09-1.736-17.973l15.123-2.148-.52-3.658-.017-.123-.02-.122-.91-5.37-.02-.122-.024-.12-1.044-5.306-.024-.12-.027-.122-.906-4.04-14.984 3.36c-1.408-5.92-3.086-11.7-4.996-17.34l14.658-4.95-1.168-3.456-.04-.115-.04-.115-1.79-4.877-.044-.116-.045-.114-1.903-4.8-.045-.114-.047-.11-1.838-4.302-14.34 6.125c-2.484-5.54-5.198-10.912-8.138-16.096l13.733-7.614-1.002-1.805-.055-.102-.06-.102-2.54-4.32-.06-.102-.063-.1-2.637-4.236-.062-.1-.065-.1-2.73-4.147-.065-.097-.066-.096-.947-1.363-13.016 9.043c-3.48-4.964-7.168-9.715-11.043-14.244l12.18-10.406-2.706-3.168-.074-.09-.08-.085-3.235-3.604-.076-.085-.08-.084-3.312-3.504-.08-.084-.082-.084-3.383-3.41-.082-.08-.08-.08-.04-.038-7.994 8.334-3.322 3.295c-4.382-4.2-8.937-8.146-13.64-11.817l10.487-12.705-.21-.174-.09-.074-.093-.073-3.703-2.904-.092-.072-.094-.07-3.758-2.798-.095-.07-.096-.067-3.813-2.694-.096-.067-.097-.064-3.617-2.423-9.34 13.957c-3.88-2.42-7.827-4.674-11.84-6.736-1.223-.63-2.456-1.23-3.69-1.82l3.388-6.766 4.517-8.522-.005-.004-.095-.05-.098-.05-2.637-1.32-.086-.04-.087-.042-2.65-1.26-.086-.043-.086-.036-2.663-1.203-.086-.036-.087-.037-2.676-1.143-.086-.037-.086-.035-2.69-1.086-.086-.033-.088-.033-2.7-1.028-.085-.033-.088-.032-1.105-.396-5.955 16.642c-5.613-1.88-11.3-3.416-17.024-4.61l.67-3.155 3.332-14.384-.1-.024-.083-.02-.088-.017-2.758-.586-.086-.018-.086-.018-2.764-.53-.084-.017-.086-.015-2.765-.48-.084-.015-.085-.013-2.768-.428-.084-.014-.084-.01-2.77-.376-.084-.012-.084-.01-2.77-.326-.084-.01-.082-.008-1.752-.173-1.793 18.035c-5.854-.55-11.707-.765-17.522-.682l-.563-18.09zm3.127 37.12c20.786-.04 42.003 4.204 60.96 13.95 72.236 37.13 126.302 141.437 55.855 264.31-10.51 18.338-20.474 29.698-28.426 35.14-7.95 5.442-12.73 5.576-17.882 3.195-5.15-2.38-11.336-8.984-16.693-20.223-5.357-11.238-9.857-26.714-12.852-45.226-1.517-9.38-7.22-17.63-15.076-28.11-7.855-10.478-18.175-22.33-29.7-34.576-23.046-24.49-50.83-50.433-72.65-68.466-24.105-19.92-31.777-38.28-30.753-54.07 1.024-15.79 11.206-30.808 28.238-42.802 19.16-13.493 46.42-22.226 74.83-23.056 1.38-.04 2.765-.062 4.15-.065zM85.574 60.42l-.377.01-2.222.062-.4.012-.393.045-2.205.25-.307.034-.305.055-1.094.196-.206.04-.207.046-.61.14 3.83 16.766c-2.53.566-5.034 1.513-7.393 2.883-2.264 1.316-4.396 2.754-6.422 4.278l-9.9-14.037-1.17.823-.108.08-.107.08-1.622 1.212-.107.08-.105.084-1.563 1.24-.105.085-.106.088-1.505 1.27-.103.087-.102.09-1.447 1.295-.102.092-.1.095-1.39 1.32-.1.094-.096.098-1.334 1.342-.098.098-.094.1-1.277 1.366-.095.102-.09.103-1.222 1.387-.092.106-.09.107-1.15 1.39L55.42 96.75c-3.406 4.264-6.205 8.834-8.4 13.525l-15.94-5.85-.69 1.88-.093.254-.08.256-.947 3.133-.078.255-.062.26-.76 3.146-.062.257-.046.26-.576 3.152-.047.255-.03.258-.395 3.146-.033.255-.018.258-.22 3.133-.016.256-.004.256-.01.658 15.023.223c-1.12 5.943-1.325 11.885-.353 17.434l-11.707 3.775.553 1.716.08.25.094.244 1.042 2.704.096.248.11.244 1.18 2.607.113.25.126.24 1.316 2.506.13.247.145.24 1.447 2.395.148.246.164.238 1.57 2.274.17.246.185.232 1.693 2.145 8.912-7.04c.28.308.57.613.866.913 3.355 3.39 7.352 5.807 11.505 7.164l-7.952 11.424.502.35.198.138.205.127 1.62 1.007.218.137.227.123 1.602.88.237.13.246.117 1.584.752.26.123.265.106 1.567.627.278.113.285.094 1.55.508.296.097.302.08 1.53.39.312.08.318.058 1.51.277.326.06.328.036 1.492.164.332.037.334.014 1.473.057.336.014.334-.01 1.455-.048.332-.01.33-.034 1.437-.15.326-.034.32-.057.28-.048-2.317-13.216-.427-4.082c4.464-1.2 8.353-3.434 11.848-6.192l11.885 11.756.686-.693.108-.11.104-.11 1.166-1.26.096-.102.093-.107 1.145-1.314.086-.1.084-.102 1.127-1.368.114-.138.11-.145 2.19-2.883.13-.17.123-.177 2.11-3.06.107-.155.1-.158 2.028-3.21.09-.142.084-.144.68-1.166-12.64-7.37c3.72-4.93 6.93-10.24 9.603-15.443l11.95 5.056 1.37-3.233.032-.08.034-.08 1.44-3.592.03-.073.03-.072 1.355-3.55.026-.065.026-.07 1.267-3.48.023-.062.02-.062 1.183-3.39.03-.083.027-.084.066-.202-11.917-3.906c1.33-5.458.955-10.916-.643-15.99l15.42-3.045-.21-1.07-.07-.358-.1-.353-.602-2.146-.094-.33-.117-.327-.766-2.116-.11-.308-.133-.3-.922-2.08-.125-.283-.144-.276-1.07-2.032-.137-.262-.155-.254-1.207-1.98-.147-.242-.16-.233-1.337-1.92-.156-.226-.168-.214-1.458-1.853-.164-.21-.176-.2-1.014-1.145-12.103 10.68c-.092-.106-.18-.218-.272-.323-3.286-3.696-7.43-6.82-12.388-8.576l6.332-15.024-1.045-.442-.27-.113-.275-.095-2.188-.765-.29-.1-.293-.082-2.213-.615-.308-.086-.317-.065-2.227-.457-.332-.066-.337-.046-2.235-.29-.355-.048-.357-.017-2.233-.12-.38-.02zM256.06 94.205c-11.702.262-22.988 6.446-29.267 17.322-9.568 16.573-3.89 37.766 12.684 47.334 16.573 9.57 37.763 3.89 47.332-12.682 9.567-16.573 3.89-37.766-12.683-47.334-5.697-3.29-11.94-4.776-18.068-4.64zM86.31 96.043c.56-.005 1.1.09 1.694.244 1.583.408 3.56 1.608 5.31 3.576 3.5 3.938 4.988 10.4 3.873 13.54-3.142 8.85-10.42 22.592-17.844 30.284-3.712 3.847-7.315 5.93-9.444 6.348-2.13.42-3.296.496-6.603-2.846-2.97-3-4.967-11.83-1.933-22.21C64.4 114.602 71.78 103.678 83.07 97.12c1.07-.62 1.907-.932 2.676-1.036.192-.026.38-.04.567-.04zm259.86 16.828c-7.924 0-14.348 6.425-14.348 14.35 0 7.922 6.424 14.346 14.348 14.346s14.348-6.424 14.348-14.347c0-7.925-6.424-14.35-14.348-14.35zm38.062 60.85c-17.126.384-33.645 9.437-42.836 25.356-14.005 24.258-5.693 55.276 18.565 69.28 24.257 14.006 55.272 5.692 69.277-18.565 14.005-24.256 5.697-55.273-18.56-69.278-8.34-4.815-17.475-6.992-26.446-6.79zm-291.9 77.243l-1.898 17.396c-1.002-.17-2.018-.31-3.06-.405-1.41-.126-2.812-.144-4.2-.062-2.617.153-5.183.673-7.666 1.5l-5.885-15.534-1.66.628-.2.076-.2.086-1.885.817-.198.084-.193.096-1.864.91-.194.092-.187.104-1.834 1.002-.19.103-.182.112-1.803 1.094-.183.112-.178.12-1.766 1.186-.18.122-.17.128-1.73 1.28-.172.13-.168.135-1.683 1.373-.166.135-.163.145-1.588 1.424 11.114 12.414c-1.432 1.387-2.78 2.892-4.027 4.507-1.92 2.487-3.63 5.24-5.118 8.223l-4.647-2.125-10.375-5.318-.047.093-.095.186-.086.19-1.05 2.298-.087.188-.078.19-.967 2.392-.076.19-.07.193-.88 2.48-.066.19-.06.193-.788 2.574-.058.19-.05.193-.696 2.664-.05.188-.04.192-.596 2.756-.04.19-.034.187-.442 2.547 16.137 2.8c-.88 4.59-1.354 9.492-1.354 14.676v.025c.002.843.023 1.672.035 2.507l-15.792.563.164 4.63.004.104.006.104.3 5.19.006.107.008.105.412 5.1.01.107.01.108.386 3.72 15.528-1.615c.63 6.17 1.534 12.132 2.687 17.89l-15.21 3.06.395 1.96.02.113.027.112 1.035 4.556.025.113.028.113 1.13 4.467.03.11.03.114 1.226 4.377.03.114.036.11.842 2.74 14.81-4.55c1.836 5.89 3.944 11.53 6.31 16.91L46.5 400.11l.12.286.048.114.05.11 1.745 3.84.05.11.055.11 1.825 3.752.054.11.054.108 1.902 3.663.06.11.057.106 1.98 3.572.058.107.063.106.904 1.534 13.41-7.89c3.08 5.233 6.417 10.168 9.975 14.8l-12.262 9.61 1.998 2.55.077.098.078.095 2.445 2.955.078.094.082.094 2.504 2.867.08.094.084.09 2.56 2.78.085.09.087.09 2.613 2.692.086.087.088.086.197.193 10.87-11.12c4.27 4.298 8.746 8.245 13.387 11.84l-9.277 12.37 2.447 1.836.097.072.098.07 2.934 2.085.097.07.1.065 2.97 1.998.1.067.1.064 3.006 1.912.1.065.102.06 3.04 1.827.1.06.104.06 1.166.662 7.56-13.333c5.243 3.05 10.618 5.7 16.07 7.947l-5.773 14.047.84.345.107.044.11.04 3.21 1.23.107.04.112.04 3.226 1.142.11.037.11.036 3.24 1.057.11.037.112.033 3.254.97.11.034.113.03 3.262.89.114.03.11.026.714.176 3.603-14.67c5.892 1.507 11.806 2.554 17.678 3.144l-1.76 15.048.577.07.118.013.115.01 3.273.3.117.01.118.008 3.265.216.12.007.117.006 3.257.133.12.006.12.002 3.243.05h.24l3.232-.035h.12l.12-.006 1.81-.067-.555-15.408c5.897-.41 11.48-1.615 16.718-3.456l4.5 15.61.573-.165.123-.036.122-.04 1.812-.575.123-.04.12-.043 1.785-.62.12-.044.12-.045 1.754-.666.12-.045.118-.05 1.727-.71.118-.047.115-.05 1.697-.755.172-.076.17-.083 3.31-1.63.22-.11.218-.12 3.195-1.79.213-.12.207-.13 1.14-.72-9.042-14.335c4.726-3.124 9.035-6.76 12.867-10.744l12.37 11.852 1.136-1.186.147-.152.138-.158 2.37-2.71.137-.154.127-.16 2.25-2.812.125-.155.118-.162 2.13-2.907.114-.156.108-.162 2.008-2.996.107-.16.098-.162 1.38-2.248-14.365-8.8c3.165-4.96 5.774-10.148 7.81-15.41l15.304 5.74.123-.323.058-.158.055-.163 1.142-3.418.053-.16.05-.16 1.017-3.453.046-.16.04-.162.892-3.474.04-.16.038-.164.764-3.492.035-.162.03-.164.636-3.504.03-.164.024-.166.06-.412-16.005-2.318c.356-2.424.6-4.832.688-7.206.13-3.472.237-6.857.246-10.152l16.277-.676-.073-1.802-.008-.184-.016-.184-.274-3.377-.015-.187-.022-.188-.406-3.332-.023-.193-.032-.19-.54-3.28-.032-.198-.04-.197-.673-3.217-.043-.202-.05-.203-.807-3.15-.053-.208-.064-.207-.082-.27-14.506 4.438c-1.217-5.525-3.338-10.63-6.957-15.217l12.445-8.846-1.662-2.336-.166-.234-.18-.223-1.898-2.35-.186-.23-.2-.22-2.038-2.22-.154-.17-.165-.16-1.07-1.057-.11-.11-.113-.103-1.106-1.024-.114-.107-.12-.103-1.14-.986-.12-.103-.124-.1-1.176-.948-.125-.103-.128-.096-1.21-.91-.13-.096-.132-.092-1.246-.87-.133-.095-.136-.088-.6-.39-9.293 14.336c-4.15-2.082-8.96-3.663-14.467-4.86l2.894-17.575-1.558-.257-.15-.023-.15-.02-1.748-.23-.147-.02-.148-.016-1.785-.177-.145-.014-.144-.01-1.823-.125-.142-.01-.14-.005-1.86-.07-.14-.005-.14-.002-1.894-.015h-.137l-.135.003-1.93.04-.136.005-.133.006-1.97.097-.127.007-.13.012-2.005.153-.126.01-.125.013-2.044.215.918 8.755-.934-8.752-4.482.48-.194.018.862 8.074.558 6.755c-2.038-.12-4.117-.225-6.285-.3h-.003c-3.856-.137-8.278-.487-12.93-.995l.36-12.866-2.307-.065-3.486-.21-3.27-.31-3.185-.418-2.962-.504-1.656-.353-2.533 11.914c-7.163-1.337-13.957-2.947-19.416-4.705l3.342-5.956 4.22-6.567-1.94-1.246-1.59-1.17-1.422-1.194-1.305-1.254-1.208-1.328-1.082-1.37-.973-1.423-.505-.862-13.543 7.94c-1.607-4.72-2.758-10.69-4.2-17.005-.263-1.16-.546-2.34-.84-3.525l14.695-1.3-.22-2.505-.02-.213-.028-.212-.345-2.565-.03-.22-.04-.216-.454-2.47-.04-.223-.052-.223-.556-2.374-.053-.226-.065-.225-.656-2.28-.066-.23-.076-.228-.752-2.186-.08-.23-.092-.228-.844-2.09-.094-.232-.105-.226-.717-1.534-15.217 7.106c-.58-.962-1.204-1.914-1.89-2.85-2.073-2.823-4.76-5.348-7.95-7.423l3.688-5.663 6.515-8.88-.075-.055-.21-.152-.213-.143-1.618-1.053-.215-.14-.22-.127-1.667-.96-.22-.126-.225-.116-1.71-.865-.224-.113-.23-.1-1.75-.77-.226-.1-.23-.09-1.79-.676-.226-.086-.233-.075-1.822-.585-.228-.073-.233-.062-1.85-.49-.23-.06-.232-.05-1.88-.396-.228-.05-.23-.034-1.903-.305-.227-.035-.23-.026-1.32-.144zm-7.37 35.568c.25.006.5.018.745.04 6.672.598 8.936 2.396 11.198 5.477 2.262 3.08 4.006 8.334 5.483 14.805 1.477 6.47 2.717 13.97 5.655 21.42 2.938 7.452 8.144 15.186 16.898 19.617 17.77 8.99 46.593 12.724 66.6 13.426h.002c25.25.884 36.064 5.308 40.318 10.248 4.255 4.94 5.246 14.31 4.63 30.63-.41 10.887-5.686 25.306-14.796 36.486-9.11 11.18-21.474 19.12-36.592 19.865-52.21 2.57-119.89-40.345-120.15-137.56.002-12.446 3.49-21.685 7.816-27.292 4.06-5.258 8.424-7.226 12.193-7.162zm29.515 82.402c-7.925 0-14.35 6.424-14.35 14.347 0 7.923 6.425 14.347 14.35 14.347 7.922 0 14.346-6.424 14.346-14.348s-6.424-14.348-14.347-14.348zm63.73 17.6c-13.473 0-24.394 10.924-24.394 24.398s10.92 24.398 24.395 24.398 24.4-10.924 24.4-24.398-10.925-24.397-24.4-24.397z',
  score: SCORES.EPIC,
  obtainedCheck: ({ match }) => match.participant.stats.totalMinionsKilled >= 400,
  context: 'matches',
  attribute: 'capability'
};

export default pesticide;
