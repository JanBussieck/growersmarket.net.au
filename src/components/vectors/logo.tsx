import * as React from 'react';

export function Logo(props) {
  return (
    <svg
      viewBox="0 0 390 204"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      {...props}
    >
      <path
        d="M72.655 23.064c-23.697 2.811-37.003 18.783-36.247 43.513.759 24.848 13.713 38.479 37.854 39.833 9.043.507 17.389-.678 29.352-4.168 1.91-.558 2.062-.666 2.312-1.652.508-2.002.498-2.058-.553-2.919-1.76-1.441-1.75-1.374-1.754-10.715-.007-12.122-.01-12.117 5.67-13.426.89-.205.96-.39.964-2.605.004-2.468.164-2.374-3.746-2.2-4.743.21-16.858.203-24.315-.014-7.654-.223-7.074-.405-7.07 2.214.004 2.322.042 2.397 1.283 2.583 10.704 1.601 11.089 2.263 10.487 18.012-.317 8.279-1.054 9.225-7.166 9.198-14.412-.063-24.103-15.69-24.103-38.866 0-25.353 10.807-37.512 29.238-32.895 8.608 2.157 11.859 6.547 13.408 18.107.312 2.326.33 2.349 1.917 2.352 3.067.006 2.924.273 3.206-5.994.243-5.388.64-9.745 1.307-14.294.546-3.726.547-3.703-.174-3.704-.324-.001-1.987-.241-3.696-.533-13.624-2.333-20.275-2.764-28.174-1.827m51.74 33.194c-1.743.908-6.528 2.295-9.26 2.684-1.157.165-1.173.181-1.36 1.347l-.138.865 1.245.631c2.132 1.082 2.095.965 2.296 7.308.185 5.818-.065 13.59-.46 14.329-.208.387-.904.713-2.713 1.269-.61.188-.643.256-.643 1.356v1.157l8.725.016 8.725.015.2-.943c.25-1.168.134-1.492-.587-1.641-4.8-.995-4.526-.318-4.528-11.251l-.001-8.265.553-.519c1.222-1.148 3.735-.5 5.966 1.539 1.68 1.536 2.002 1.306 3.664-2.631 1.728-4.095 1.536-5.999-.701-6.934-2.37-.99-4.278-.167-7.545 3.254l-2.215 2.32.109-3.039c.128-3.549.099-3.612-1.331-2.867m130.69 0c-1.731.902-6.608 2.326-9.268 2.707-1.17.168-1.132.131-1.326 1.306l-.147.889 1.226.611c2.375 1.184 2.558 2.226 2.372 13.466-.148 8.87-.014 8.481-3.247 9.458-.611.184-.643.251-.643 1.352v1.157l8.736.016 8.735.015.208-.75c.436-1.567.41-1.593-2.253-2.238-3.007-.729-2.925-.411-2.846-11.036l.06-8.241.75-.509c1.357-.921 3.504-.279 5.663 1.694 1.555 1.421 1.755 1.342 3.058-1.201 2.844-5.552 2.14-8.682-1.951-8.675-2.061.003-3.605 1.07-6.835 4.726l-1.028 1.163.042-2.785c.062-4.029.127-3.871-1.305-3.125m-104.234.329c-10.3 2.526-14.921 13.758-9.921 24.114 5.42 11.23 23.749 9.053 27.136-3.225 3.566-12.926-5.386-23.789-17.215-20.889m75.845.089c-8.241 2.361-12.513 11.3-10.077 21.086 2.804 11.265 15.049 13.877 23.224 4.955 2.164-2.361 2.35-5.405.233-3.82-6.287 4.707-14.272 1.681-15.31-5.802-.182-1.315-.17-1.32 4.395-1.598 4.438-.271 10.608-.927 11.677-1.242.982-.289 1.24-1.698.476-2.605-.3-.355-.611-1.059-.695-1.564-1.201-7.269-7.213-11.333-13.923-9.41m51.518 0c-5.387 1.39-8.316 5.886-7.37 11.312.65 3.723 2.773 6.016 8.505 9.186 4.636 2.564 5.772 5.859 2.557 7.416-3.411 1.651-7.527-1.429-9.15-6.845-.436-1.456-.621-1.557-1.962-1.072-.841.304-.82.04-.4 4.885.45 5.19.314 4.84 2.117 5.377 9.098 2.71 16.66-.2 18.468-7.107 1.135-4.333-.892-8.533-5.222-10.82-6.725-3.553-7.745-4.437-7.747-6.719-.002-4.21 5.86-4.384 7.677-.228.18.413.53 1.521.779 2.464l.452 1.714 1.004-.013c1.269-.017 1.164.179 1.318-2.451.072-1.237.242-3.19.377-4.339.135-1.15.19-2.145.123-2.213-.74-.74-9.218-1.142-11.526-.547m-108.531.799c-.358 1.429-.041 2.059 1.196 2.375 1.752.446 2.396.913 3.042 2.206 1.198 2.399 3.935 11.718 7.11 24.215l.246.964 4.972.12.66-1.988c1.369-4.122 4.826-13.666 5.135-14.177.26-.433 2.53 5.583 5.446 14.438l.529 1.607h2.425c2.829 0 2.478.318 3.552-3.213 1.35-4.442 3.895-12.222 5.962-18.231 1.453-4.222 2.082-5.041 4.448-5.786 1.49-.469 1.78-.85 1.595-2.093l-.133-.886-13.166.07-.184.982c-.26 1.385-.18 1.472 1.766 1.924 2.058.478 2.81 1.042 2.81 2.108 0 1.588-3.41 13.877-3.85 13.877-.271 0-4.253-11.007-5.484-15.158l-.588-1.981h-4.64l-.128.589c-.798 3.637-5.023 16.216-5.333 15.877-.272-.296-1.952-6.425-3.122-11.384-.756-3.207-.714-3.385.915-3.911 1.615-.523 1.778-.73 1.539-1.946l-.198-1.005-8.205-.021c-8.158-.02-8.205-.018-8.317.428m-15.49 2.017c5.532 1.537 7.164 23.416 1.883 25.257-4.425 1.542-7.48-4.537-7.467-14.868.009-8.124 1.793-11.442 5.584-10.389m76.06.832c1.2 1.343 2.463 5.896 2.02 7.287-.224.711-7.062 1.004-7.624.327-.622-.75.553-6.092 1.66-7.552 1.086-1.431 2.7-1.456 3.945-.062M118.943 99.585c-.065.278-.142 1.179-.171 2.002l-.053 1.497 2.356.477c7.879 1.595 8.196 2.191 7.402 13.915-.118 1.75-.314 4.676-.434 6.503-.12 1.826-.317 4.429-.437 5.784-.16 1.856-.302 3.713-.428 5.571-.198 2.943-.39 5.328-1.171 14.569-1.153 13.644-1.713 14.803-7.717 15.945-2.962.563-2.985.569-3.155.837-.198.311-.213 2.207-.026 3.146l.14.699 4.52-.19a218.945 218.945 0 0117.734-.005l4.643.187.246-.829c.135-.456.215-1.354.177-1.995-.077-1.304.168-1.144-2.64-1.723-5.994-1.236-7.415-2.261-7.848-5.665-.451-3.54 1.21-42.479 1.84-43.148.292-.308.226-.433 1.297 2.425.309.825.695 1.837.858 2.249.257.651 1.538 4.132 2.366 6.428.149.412 1.542 4.172 3.097 8.355 1.554 4.184 3.288 8.908 3.853 10.498.71 2 1.422 4 2.135 5.999 2.01 5.637 4.376 12.927 5.078 15.64l.194.75 1.92.063c2.85.094 2.73.173 3.597-2.365.836-2.448 2.465-6.981 3.099-8.624.228-.589 1.045-2.759 1.816-4.821 1.286-3.44 2.183-5.754 5.4-13.926.626-1.591 1.478-3.76 1.893-4.821a3598.616 3598.616 0 016.42-16.232c.37-.915.774-1.63.897-1.589.303.101.417 34.79.132 40.532-.338 6.833-.47 7.032-5.346 8.142-2.733.621-2.628.511-2.552 2.697l.063 1.801 3-.002c1.649-.001 5.506-.088 8.569-.192 3.876-.132 7.906-.106 13.246.086 8.985.322 8.325.479 8.366-1.995.033-1.944.229-1.743-2.23-2.288-6.465-1.431-7.118-2.13-7.491-8.021-1.007-15.898-1.523-48.733-.798-50.81.742-2.125 2.092-2.831 7.118-3.726.833-.148 1.619-.417 1.768-.605.3-.379.364-2.987.083-3.429-.235-.371-23.174-.114-23.263.261-1.166 4.876-3.426 11.127-7.944 21.98-.663 1.591-1.622 3.905-2.132 5.142-3.834 9.3-6.932 16.116-7.273 16.003-.255-.085-1.55-2.95-3.7-8.183-2.305-5.611-3.077-7.475-3.281-7.927-.304-.671-3.457-8.483-3.762-9.32a41.026 41.026 0 00-.74-1.821 73.662 73.662 0 01-1.075-2.678 211.271 211.271 0 00-1.715-4.285c-1.353-3.278-2.024-5.368-2.367-7.367-.143-.839-.32-1.586-.39-1.662-.07-.076-5.74-.206-12.597-.291l-12.47-.153-.117.505m150.87 20.444c-1.547.552-5.855 1.421-8.834 1.782l-3 .364v2.291l1.467.437c2.203.657 2.123.392 2.344 7.728.226 7.459.023 30.43-.281 31.945-.266 1.323-.663 1.728-2.03 2.07-1.45.363-1.607.518-1.607 1.575 0 1.355.093 1.382 3.857 1.146 2.997-.188 9.619-.096 11.248.156.987.153 1.264-.158 1.275-1.428l.01-1.118-1.5-.497a75.38 75.38 0 00-1.547-.502c-.777-.104-1.41-10.291-.638-10.291.423 0 .81.556 2.613 3.75 3.819 6.764 5.378 8.921 7.05 9.758l1.268.633 3.876-.019c5.686-.028 5.947-.079 6.317-1.247.383-1.211.155-1.585-1.072-1.762-1.585-.228-2.41-.712-3.644-2.139-2-2.31-5.99-8.108-8.154-11.846l-1.23-2.123.472-.662c.649-.912 5.034-5.915 5.672-6.471.646-.563 2.647-1.498 3.852-1.8.996-.249 1.214-.641 1.089-1.95l-.07-.726-1.392.009c-3.715.023-12.452.396-12.538.534-.224.363-.157 2.183.085 2.333.143.088.906.279 1.696.425 2.403.443 2.723 1.191 1.429 3.34-2.095 3.479-6.252 7.494-7.33 7.08-.502-.193-.227-27.711.299-30.004.609-2.649.37-3.279-1.052-2.771m59.886 9.715c-.854.569-2.565 1.5-3.802 2.07l-2.251 1.035v3.251c0 3.668.076 3.494-1.77 4.07-1.327.415-1.548.757-1.704 2.648-.071.855.274 1.029 2.112 1.064 1.458.029 1.362-.683 1.366 10.055.003 11.354.104 12.046 2.05 14.046 3.714 3.819 13.248 1.85 13.895-2.869.196-1.431-.058-1.678-1.196-1.164-1.233.555-3.487.563-4.304.014-1.575-1.058-1.557-.937-1.557-10.955v-8.998l3.32-.107 3.32-.107.255-1.714c.14-.943.26-1.992.268-2.332l.014-.618-3.59.082-3.587.082v-10.605l-.643.009c-.401.005-1.228.398-2.196 1.043m-85.04 8.633c-1.496.891-5.271 1.966-10.058 2.865-.346.065-.488.298-.597.98-.164 1.021-.1 1.114 1.296 1.88 2.08 1.141 2.393 3.278 2.12 14.478-.18 7.36-.191 7.394-2.504 8.026l-1.361.371-.063 1.185c-.08 1.495-.2 1.457 3.723 1.208 2.925-.186 10.72-.094 12.516.147.975.131 1.275-.088 1.509-1.104.298-1.296.152-1.475-1.458-1.789-3.877-.757-3.67-.15-3.705-10.85l-.028-8.536.609-.488c1.335-1.069 3.583-.508 5.69 1.42 1.65 1.509 1.96 1.448 3.032-.598 3.016-5.758 2.586-8.78-1.31-9.182-1.84-.19-3.39.715-6.06 3.541l-2.168 2.294.039-2.785c.02-1.532.029-2.896.016-3.03-.04-.435-.541-.448-1.238-.033m-28.086.288c-2.38.641-6.084 2.486-8.012 3.99-1.407 1.098-2.421 5.392-1.427 6.044 1.469.962 1.73.817 2.925-1.616 1.262-2.57 1.733-2.962 3.757-3.123 3.435-.272 5.724 1.74 6.059 5.327.22 2.352.213 2.357-5.41 4.224-7.837 2.601-7.83 2.598-8.453 4.997-1.48 5.695 1.614 11.598 6.076 11.594 1.393-.001 3.815-.977 6.056-2.44l1.603-1.047.209.549c.115.302.209.684.209.849 0 .573 1.425 1.745 2.427 1.997 2.45.617 6.144-.335 8.35-2.152.91-.75 1.473-3.826.64-3.506-3.431 1.317-3.72.585-3.696-9.367.02-8.339-.043-8.967-1.164-11.403-1.728-3.757-6.276-5.96-10.15-4.917m88.006-.204c-7.868 1.414-12.453 7.338-12.444 16.076.01 10.328 5.772 16.583 14.275 15.5 4.736-.603 10.322-4.497 10.997-7.665.448-2.103.239-2.266-1.437-1.122-6.17 4.212-13.734 1.488-15.006-5.403-.313-1.699-.228-1.824 1.329-1.951l6.893-.564c6.452-.528 7.78-.741 8.302-1.335.512-.585.475-1.639-.08-2.229-.25-.266-.59-1.092-.757-1.835-1.48-6.607-6.425-10.487-12.072-9.472m.848 3.295c1.518.775 2.436 2.716 2.823 5.97.322 2.712.484 2.6-3.85 2.662-3.952.057-3.968.051-3.775-1.557.72-5.979 2.322-8.34 4.802-7.075m-85.566 13.172c.327 1.3-.221 8.928-.665 9.26-2.161 1.62-5.494-1.307-5.483-4.816.008-2.545.122-2.68 3.377-4 2.774-1.125 2.607-1.098 2.77-.444"
        className="fill-current text-green-dark"
      />
      <path
        d="M181.172.164c-10.731.449-14.505.661-14.89.834-.236.106-1.996.258-3.91.337-1.915.079-3.482.215-3.482.303 0 .087-1.266.228-2.813.312-1.547.084-2.97.234-3.16.332-.191.099-1.72.29-3.397.425-1.678.135-3.27.297-3.535.36-.267.063-1.594.249-2.95.414-4.912.598-6.322.808-6.427.958-.06.084-.902.222-1.874.308-.972.085-1.768.223-1.768.307 0 .084-.94.268-2.09.408-2.496.304-2.67.334-2.945.502-.118.071-.841.2-1.607.285-.765.086-1.49.231-1.606.322-.118.092-.817.235-1.554.319-.736.083-1.34.226-1.34.317s-.697.235-1.551.319c-.853.084-1.6.224-1.66.312-.06.087-.976.311-2.037.497-2.361.414-3.932.771-4.5 1.022-.235.104-.837.251-1.337.327-.5.076-.96.219-1.021.319-.061.099-.64.246-1.287.327-.646.081-1.175.215-1.175.298 0 .083-.771.276-1.714.429-.942.153-1.714.351-1.714.44 0 .088-.478.224-1.062.302-.584.077-1.113.223-1.176.324-.062.101-.546.248-1.075.328-.53.079-1.011.224-1.071.321-.06.097-.544.242-1.076.322-.532.08-.967.214-.967.297 0 .084-.646.275-1.435.425-.79.15-1.542.36-1.671.468-.13.107-.643.261-1.141.34-.497.08-.953.223-1.012.319-.06.095-.54.238-1.066.317-.528.079-.96.218-.96.31 0 .091-.457.234-1.017.318-.56.083-1.081.254-1.158.378-.172.279-5.957.558-11.898.576-2.38.007-4.38.099-4.445.204-.065.106-.986.261-2.048.345-1.061.084-1.93.227-1.93.319 0 .091-.625.233-1.39.315-.764.082-1.44.229-1.5.326-.06.098-.591.244-1.18.325-.59.081-1.071.217-1.071.302 0 .085-.627.28-1.393.432-.766.152-1.393.35-1.393.44 0 .09-.385.226-.856.301-.472.075-.857.222-.857.325 0 .103-.338.251-.75.328-.413.078-.75.233-.75.346 0 .112-.111.204-.247.204-.284 0-2.591 1.107-2.755 1.322-.06.079-.373.21-.696.291-.323.081-.587.212-.587.292 0 .079-.265.262-.59.407-.323.145-.781.384-1.017.532-.84.525-1.718 1.118-1.974 1.331-.353.295-.694.563-1.454 1.145-1.602 1.227-2.202 1.747-3.78 3.277-.925.899-1.683 1.734-1.683 1.857s-.074.255-.165.294c-.091.04-.597.602-1.125 1.25s-1.032 1.211-1.121 1.25c-.088.039-.16.211-.16.381 0 .171-.141.365-.313.431-.173.066-.372.303-.443.528a2.213 2.213 0 01-.383.685c-.33.36-.726.981-1.056 1.653-.145.294-.38.656-.52.803-.14.147-.503.773-.808 1.392-.713 1.445-.924 1.768-1.833 2.812-1.405 1.612-4.58 4.631-4.878 4.637-.087.002-.674.532-1.306 1.178-.632.647-1.222 1.176-1.311 1.176-.204 0-9.003 8.772-9.003 8.975 0 .083-.334.484-.743.89-.408.407-.746.82-.75.917-.003.097-.271.45-.595.783-.324.334-.972 1.146-1.44 1.805-.468.659-.926 1.198-1.018 1.198-.092 0-.167.13-.167.289 0 .158-.193.462-.428.676-.236.213-.43.517-.43.675 0 .159-.1.289-.224.289s-.327.289-.45.642c-.123.354-.29.643-.368.643-.08 0-.383.458-.675 1.017-.293.56-.634 1.114-.76 1.232-.126.118-.463.673-.75 1.233-.286.559-.583 1.017-.658 1.017-.076 0-.204.265-.286.587-.081.323-.22.637-.31.697-.25.168-1.945 3.807-1.945 4.175 0 .179-.097.326-.215.326-.117 0-.217.121-.221.268-.004.147-.194.653-.421 1.125-.228.471-.418 1.017-.422 1.214-.004.196-.08.389-.168.428-.201.09-1.347 3.58-1.342 4.089.002.206-.082.375-.186.375s-.256.528-.337 1.175c-.08.646-.225 1.223-.321 1.282-.095.06-.242.664-.327 1.343-.084.679-.25 1.352-.367 1.496-.117.143-.302 1.059-.41 2.035-.107.976-.24 2.063-.294 2.417-.246 1.604-.333 8.594-.134 10.819.398 4.456 1.133 9.059 1.52 9.534.098.118.245.673.328 1.232.083.56.237 1.018.342 1.018.104 0 .189.187.189.415 0 .515 1.084 3.937 1.293 4.084.085.059.22.421.304.804.083.383.229.696.325.696.095 0 .237.337.314.75.077.412.22.75.317.75s.298.434.447.964c.148.53.354.964.456.964.103 0 .187.186.187.413 0 .227.132.545.293.706.16.162.36.506.443.766.082.259.229.472.326.472s.243.264.324.587c.08.323.212.636.29.696.08.06.43.664.78 1.341.349.678.703 1.232.786 1.232.084 0 .216.292.294.649.37 1.687 2.494 4.814 3.428 5.048.264.066.577.333.695.592.234.513.854 1.294 1.905 2.398.37.389.708.804.75.922.43 1.202 11.448 11.967 15.383 15.03.378.294.893.708 1.144.92.25.211.774.581 1.162.821.388.24.706.525.706.633 0 .108.123.197.274.197.15 0 .438.192.64.428s.513.429.69.429c.178 0 .324.098.324.218 0 .121.265.336.589.478.324.142.666.381.76.531.095.15.312.272.483.272.17 0 .31.088.31.196 0 .193 1.89 1.472 2.625 1.777.206.086.375.255.375.377s.125.221.278.221c.153 0 .466.148.696.328.715.561 2.697 1.815 2.868 1.815.09 0 .385.193.657.428.272.236.624.429.783.429.159 0 .288.094.288.21 0 .115.24.271.536.344.295.074.536.221.536.326 0 .105.132.191.295.191.162 0 .41.14.553.31.14.171.61.426 1.043.566.433.141.864.387.958.547.094.16.31.291.482.291.17 0 .31.086.31.191 0 .105.265.257.588.338.323.081.636.212.696.291.06.079.688.433 1.395.787.707.353 1.335.707 1.395.786.06.079.374.21.698.292.324.081.642.233.707.338.14.226 3.608 1.905 3.936 1.905.125 0 .227.096.227.214s.12.217.268.221c.147.004.653.194 1.125.422.47.227.977.417 1.124.421.148.004.268.104.268.221 0 .118.098.215.217.215.27 0 2.107.795 5.142 2.227.65.307 1.277.561 1.393.565.116.003.693.243 1.282.533.59.29 1.24.528 1.447.529.206.001.375.094.375.207 0 .112.337.267.749.345.413.077.75.222.75.321 0 .1.338.244.75.322.413.077.75.208.75.29 0 .157 2.13.778 2.41.703.089-.024.16.049.16.161 0 .113.338.268.75.345.413.078.75.221.75.318 0 .098.435.243.965.322.53.08.964.226.964.325s.337.243.75.321c.412.077.75.215.75.307 0 .091.626.284 1.392.428.766.145 1.393.34 1.393.434 0 .095.385.237.856.316.47.08.905.224.965.322.06.097.495.242.965.321.47.08.856.222.856.316s.434.236.964.316c.53.079.964.226.964.326s.675.296 1.5.435 1.5.331 1.5.427c0 .097.482.242 1.07.323.59.081 1.072.222 1.072.314 0 .091.39.229.867.305.476.076 1.03.227 1.232.334.41.22 1.63.549 3.686.994.766.165 1.553.393 1.749.506.196.113.849.27 1.45.35.603.08 1.144.224 1.203.319.059.096.563.24 1.12.32.557.081 1.109.222 1.227.314.118.092.696.236 1.285.321.589.085 1.168.225 1.286.311.118.086.985.277 1.928.424.943.146 1.81.343 1.928.437.118.095.865.241 1.66.325.796.084 1.447.227 1.447.317 0 .091.626.232 1.392.314.766.082 1.393.224 1.393.317 0 .092.639.233 1.42.313.782.08 1.77.297 2.197.482.439.191 1.68.385 2.864.448 1.149.062 2.089.186 2.089.277 0 .092.916.235 2.035.319 1.12.084 2.036.229 2.036.323s.724.238 1.61.321c.885.083 1.656.226 1.712.317.056.091.995.235 2.086.32 1.09.084 2.08.22 2.197.301.118.082.552.173.964.204.413.03 1.329.145 2.036.255.707.11 1.79.2 2.41.201.619.001 1.125.087 1.125.192 0 .105 1.277.26 2.839.345 1.56.085 2.935.233 3.053.328.118.095 1.589.242 3.268.327 1.678.086 3.052.223 3.052.306 0 .083.603.174 1.339.203 1.75.069 6.295.402 8.195.6 2.1.219 43.613.187 45.313-.035.766-.1 2.743-.161 4.392-.136 6.46.101 12.764-.48 18.104-1.668a59.958 59.958 0 013.643-.67c1-.145 2.013-.345 2.249-.443.236-.098 1.465-.241 2.732-.319 1.267-.077 2.303-.219 2.303-.314 0-.096.916-.243 2.035-.327 1.12-.083 2.036-.226 2.036-.316 0-.089.819-.231 1.82-.315 1-.083 1.868-.228 1.926-.322.058-.094 1.095-.29 2.304-.435 1.209-.146 2.295-.339 2.412-.429.118-.091.817-.233 1.554-.317.737-.083 1.386-.227 1.443-.32.057-.092.73-.235 1.497-.317.767-.082 1.442-.226 1.5-.321.059-.095.735-.24 1.502-.322.768-.082 1.396-.218 1.396-.303 0-.084.783-.268 1.74-.407.958-.14 1.849-.34 1.982-.445.133-.105.699-.258 1.259-.339.56-.081 1.018-.229 1.018-.328 0-.1.482-.247 1.07-.328.59-.082 1.072-.23 1.072-.331s.579-.249 1.286-.329c.707-.08 1.285-.214 1.285-.298 0-.083.82-.274 1.82-.423 1.003-.149 1.822-.346 1.822-.438 0-.092.529-.234 1.175-.314.647-.081 1.223-.224 1.28-.318.059-.094.59-.235 1.183-.314.592-.078 1.076-.223 1.076-.322 0-.098.482-.243 1.07-.321.59-.078 1.072-.227 1.072-.33 0-.103.675-.308 1.5-.455.825-.148 1.5-.349 1.5-.448 0-.099.237-.18.527-.18.29 0 1.017-.193 1.615-.429.598-.235 1.282-.428 1.52-.428.239 0 .382-.084.318-.188-.064-.103.287-.251.78-.33.493-.079.997-.223 1.12-.32.125-.098.732-.296 1.35-.441.62-.145 1.18-.351 1.246-.457.065-.106.282-.196.48-.2.2-.004.749-.193 1.22-.421.472-.227 1.026-.417 1.232-.421.207-.004.375-.082.375-.173 0-.091.41-.273.91-.405 1.155-.304 3.02-.994 3.16-1.17.06-.073.42-.202.804-.285.383-.083.697-.24.697-.348 0-.108.219-.197.488-.197.268 0 .678-.13.91-.29.233-.159.692-.354 1.02-.434.329-.08 1.342-.486 2.25-.901 2.143-.98 2.31-1.054 3.58-1.586.544-.226 1.08-.472 1.607-.737a5.664 5.664 0 011.232-.437c.383-.081.696-.23.696-.329s.29-.243.643-.321c.354-.078.643-.23.643-.338 0-.109.106-.198.235-.198.13 0 .539-.138.91-.307.958-.436 2.273-.761 3.086-.763.383 0 .697-.083.697-.184 0-.1.89-.24 1.98-.309 1.09-.07 2.272-.221 2.626-.336.353-.115 1.366-.422 2.249-.682.884-.26 1.655-.533 1.714-.607.059-.073.52-.414 1.025-.756.505-.343 1.42-1.241 2.036-1.996.666-.819 1.333-1.636 2.003-2.452.487-.594.972-1.382 1.077-1.753.133-.467.518-.887 1.257-1.367.586-.382 1.218-.84 1.405-1.018.186-.179.407-.324.49-.324.084 0 .269-.099.41-.219 1.034-.871 1.324-1.067 1.578-1.067.159 0 .289-.078.289-.173 0-.204 2.51-1.969 2.8-1.969.11 0 .2-.073.2-.161.002-.089.336-.388.745-.667.408-.278.974-.712 1.258-.964.39-.342.79-.673 1.2-.994.377-.294.865-.686 1.084-.87.219-.184.659-.522.978-.75.319-.228 1.089-.897 1.71-1.486.624-.589 1.348-1.216 1.61-1.393.3-.21.577-.454.82-.727.189-.223.52-.56.738-.75 1.052-.917 7.21-7.19 7.21-7.344 0-.098.362-.546.804-.998.906-.925 1.38-1.488 2.29-2.719.348-.469.758-.929.912-1.024.153-.094.279-.276.279-.404s.217-.437.482-.688c.265-.251.77-.889 1.124-1.417.354-.529.702-1.01.775-1.069.073-.059.2-.324.283-.589.083-.265.24-.482.35-.482.11 0 .2-.13.2-.288 0-.159.193-.511.428-.783.236-.272.429-.616.429-.765 0-.149.075-.303.167-.342.093-.039.454-.65.803-1.357.35-.707.756-1.413.904-1.569.148-.155.268-.42.268-.589 0-.168.089-.306.198-.306.108 0 .26-.289.338-.643.078-.353.217-.642.31-.642.094 0 .29-.434.44-.964.148-.531.343-.965.432-.965.09 0 .226-.337.304-.749.077-.413.222-.75.322-.75.099 0 .243-.265.319-.589.12-.514.359-1.102.986-2.421.087-.183.28-.882.43-1.554.152-.671.347-1.221.435-1.221.088 0 .226-.482.307-1.071.08-.589.23-1.071.33-1.071.102 0 .25-.579.33-1.286.08-.707.22-1.285.315-1.285.093 0 .237-.651.319-1.447.083-.795.23-1.546.329-1.67.615-.774.75-14.233.175-17.451a97.346 97.346 0 01-.446-2.839c-.13-.913-.306-1.66-.394-1.66-.087 0-.225-.531-.306-1.179-.081-.648-.224-1.178-.318-1.178-.095 0-.235-.478-.313-1.063-.077-.584-.22-1.111-.318-1.172-.098-.06-.301-.693-.453-1.407-.151-.714-.358-1.349-.46-1.412-.1-.062-.183-.303-.183-.536 0-.232-.134-.474-.3-.537-.163-.063-.362-.542-.44-1.065-.08-.522-.223-.949-.32-.949-.098 0-.241-.338-.318-.75-.077-.413-.218-.75-.311-.75-.094 0-.29-.393-.433-.874-.307-1.025-1.231-2.777-1.637-3.103-.156-.125-.348-.487-.427-.803-.08-.317-.225-.576-.322-.576-.098 0-.3-.338-.448-.75-.15-.413-.35-.75-.443-.75-.094 0-.171-.148-.171-.328a.53.53 0 00-.321-.452c-.177-.067-.322-.202-.322-.299 0-.097-.385-.757-.857-1.467-.471-.709-.857-1.347-.857-1.416 0-.132-.028-.169-1.071-1.394-.351-.413-.694-.919-.762-1.125-.068-.206-.216-.375-.33-.375-.112 0-.296-.241-.408-.536-.112-.294-.278-.536-.37-.537-.091-.001-.406-.358-.701-.793a12.5 12.5 0 00-1.125-1.399c-.324-.333-.59-.699-.59-.813 0-.114-.144-.207-.32-.207-.177 0-.322-.104-.322-.23 0-.473-11.275-11.452-12.06-11.744-.124-.046-.495-.36-.824-.697-.33-.337-.665-.612-.745-.612-.081 0-.47-.333-.865-.741-.396-.407-1.177-1.049-1.736-1.428-.56-.378-1.161-.819-1.338-.98-.843-.767-1.376-1.136-1.64-1.136-.158 0-.288-.102-.288-.226 0-.124-.282-.323-.626-.443-.344-.12-.678-.356-.743-.525-.065-.168-.224-.306-.354-.306-.13 0-.362-.121-.516-.268a7.095 7.095 0 00-.76-.589c-.263-.177-.7-.49-.97-.696-.27-.207-.6-.375-.732-.375s-.296-.145-.364-.322c-.068-.176-.234-.321-.37-.321-.134 0-.72-.337-1.3-.75-.58-.412-1.137-.75-1.24-.75-.101 0-.301-.097-.443-.217-.536-.449-1.893-1.282-2.09-1.282a.204.204 0 01-.205-.2c0-.11-.212-.267-.472-.35-.26-.082-.604-.282-.765-.443-.161-.161-.42-.293-.573-.293-.154 0-.394-.138-.535-.308-.14-.169-.538-.369-.883-.445-.345-.076-.628-.22-.628-.321 0-.1-.217-.25-.482-.333-.265-.083-.53-.211-.59-.284-.058-.074-.663-.411-1.343-.749-.68-.338-1.288-.699-1.352-.802-.063-.102-.295-.186-.515-.186-.221 0-.541-.14-.712-.311-.171-.171-.563-.374-.872-.451-.31-.078-.561-.217-.561-.309s-.265-.234-.588-.315c-.322-.081-.636-.212-.696-.291-.163-.215-2.471-1.322-2.755-1.322-.136 0-.246-.089-.246-.198 0-.108-.29-.26-.643-.338-.354-.078-.643-.23-.643-.338 0-.109-.102-.198-.226-.198-.22 0-1.32-.461-3.11-1.304-.478-.225-1.032-.41-1.231-.41-.198 0-.361-.096-.361-.214a.22.22 0 00-.22-.214h-.006c-.124 0-.678-.198-1.232-.44l-1.434-.626c-.236-.102-.977-.434-1.647-.738s-1.37-.553-1.553-.553c-.184 0-.335-.089-.335-.197 0-.108-.296-.262-.657-.342a5.924 5.924 0 01-1.232-.444c-.316-.165-.744-.3-.95-.301-.206-.001-.375-.082-.375-.181 0-.099-.53-.308-1.178-.463-.648-.156-1.178-.359-1.178-.453 0-.094-.34-.234-.753-.311-.413-.078-.8-.219-.858-.313-.058-.094-.491-.236-.962-.316-.47-.079-.855-.222-.855-.316s-.362-.239-.804-.322c-.442-.082-.9-.223-1.018-.312-.117-.089-.696-.288-1.285-.442-.59-.155-1.168-.354-1.285-.443-.118-.089-.577-.229-1.021-.312-.443-.083-.853-.228-.911-.322-.058-.094-.491-.236-.961-.316-.47-.079-.906-.227-.968-.327-.062-.101-.546-.249-1.075-.328-.53-.079-1.012-.225-1.073-.324-.061-.099-.687-.294-1.39-.432-.703-.138-1.28-.326-1.28-.418 0-.091-.481-.232-1.07-.313-.59-.081-1.071-.226-1.071-.322 0-.095-.482-.24-1.071-.321-.59-.081-1.071-.221-1.071-.312 0-.09-.493-.222-1.094-.294-.602-.071-1.21-.225-1.35-.342-.141-.117-.951-.327-1.8-.467-.847-.14-1.541-.326-1.541-.413 0-.087-.53-.224-1.175-.305-.646-.081-1.224-.225-1.283-.321-.06-.096-.637-.24-1.285-.321-.648-.081-1.23-.23-1.292-.332-.063-.101-.644-.25-1.292-.331-.647-.081-1.225-.224-1.283-.318-.058-.094-.972-.289-2.032-.434-1.06-.144-1.928-.336-1.928-.425 0-.089-.674-.23-1.5-.313-.824-.083-1.5-.229-1.5-.325 0-.095-.722-.242-1.606-.324-.884-.083-1.607-.225-1.607-.315s-.65-.233-1.446-.317c-.795-.085-1.542-.229-1.66-.321-.118-.092-1.227-.287-2.464-.433-1.237-.147-2.346-.34-2.464-.431-.118-.09-.937-.234-1.821-.319-.884-.085-1.703-.229-1.821-.32-.118-.091-1.154-.234-2.303-.317-1.15-.084-2.09-.229-2.09-.322 0-.092-.94-.238-2.088-.323-1.15-.085-2.187-.234-2.306-.331-.12-.097-1.783-.3-3.696-.451-1.913-.151-3.48-.342-3.48-.425 0-.082-1.348-.219-2.998-.304-1.65-.085-3-.228-3-.318 0-.091-1.518-.234-3.374-.319-1.856-.085-3.473-.233-3.594-.33-.206-.165-5.778-.459-16.063-.846-5.35-.201-21.891-.189-26.888.02m30.282 6.085c6.09.303 16.919 1.057 18.566 1.293.413.059 2.148.249 3.857.421 5.462.552 8.826.98 15.21 1.934 6.22.93 16.914 2.924 21.747 4.055 6.246 1.461 8.227 1.952 12.64 3.131.826.22 1.742.463 2.036.539 1.78.459 10.344 3.101 13.605 4.198 7.32 2.463 15.788 5.772 20.997 8.206 1.14.533 2.12.969 2.178.969.25 0 9.349 4.641 11.94 6.091 43.114 24.112 59.35 56.828 43.83 88.32-6.828 13.856-18.497 25.596-37.56 37.79-.76.486-.827.612-.9 1.669-.205 3.012-3.562 5.029-8.455 5.082l-2.892.032-3.321 1.609c-18.87 9.147-40.804 16.049-65.881 20.73-27.298 5.096-59.584 6.846-89.234 4.837-5.391-.366-11.392-.879-13.82-1.181-1.57-.192-3.141-.376-4.713-.553-9.755-1.104-26.366-3.95-33.637-5.763-.235-.059-2.646-.644-5.356-1.3s-5.361-1.323-5.892-1.482c-.53-.159-1.735-.501-2.678-.759-19.636-5.389-41.427-14.584-54.911-23.172-7.91-5.038-13.673-9.33-18.79-13.992-.943-.861-1.89-1.718-2.84-2.572-1.34-1.199-5.662-6.028-7.845-8.768-13.952-17.507-17.153-37.526-9.03-56.484 4.864-11.351 14.14-22.339 27.787-32.914 1.007-.78 1.24-1.12 1.985-2.892 6.337-15.079 21.247-23.07 42.22-22.625l5.142.109 4.499-1.455c2.474-.8 5.222-1.664 6.106-1.921a63.675 63.675 0 002.142-.652c4.852-1.688 23.416-6.051 31.816-7.477.707-.12 2.153-.368 3.214-.551 22.874-3.936 52.46-5.683 76.238-4.502M68.94 29.943c-.983.479-1.745.913-1.695.963.132.132 3.794-1.486 3.799-1.678.006-.275-.263-.184-2.104.715"
        className="text-white fill-current"
      />
      <path
        d="M177.208 6.275c-14.28.733-29.945 2.403-41.992 4.476-1.061.183-2.507.431-3.214.551-7.691 1.305-21.401 4.465-29.245 6.74-1.473.427-3.015.87-3.428.984-.412.115-.991.289-1.285.387-.295.099-2.73.884-5.41 1.745-2.681.862-4.874 1.63-4.874 1.707 0 .078.747.205 1.66.282 1.652.14 5.168.677 11.302 1.726 1.767.303 3.479.551 3.803.551.72.001.72-.022.174 3.704-.666 4.549-1.064 8.906-1.307 14.294-.282 6.267-.14 6-3.206 5.994-1.586-.003-1.605-.026-1.917-2.352-1.363-10.173-3.507-13.884-9.725-16.837-4.786-2.273-16.064-2.895-17.495-.965-.235.317-3.255 1.519-3.474 1.384-.141-.087-.174-.047-.082.102.092.148.013.247-.196.247-.95 0-4.56 3.417-6.016 5.693-3.792 5.929-5.658 14.226-5.658 25.164 0 23.176 9.69 38.803 24.103 38.866 6.112.027 6.849-.919 7.166-9.198.602-15.749.217-16.411-10.487-18.012-1.241-.186-1.28-.261-1.282-2.583-.005-2.619-.585-2.437 7.069-2.214 7.457.217 19.572.224 24.315.014 3.91-.174 3.75-.268 3.746 2.2-.004 2.215-.073 2.4-.963 2.605-5.68 1.309-5.678 1.304-5.671 13.426.005 9.341-.006 9.274 1.754 10.715 1.05.861 1.06.917.553 2.919-.25.986-.401 1.094-2.312 1.652-6.162 1.798-11.323 2.967-16.011 3.628-22.31 3.147-39.6-3.929-46.84-19.17-5.172-10.885-5.931-27.97-1.727-38.856.285-.74-5.08 3.486-9.17 7.223C6.105 76.777-.235 101.754 11.86 126.014c3.177 6.374 10.382 15.951 15.322 20.367.5.448 1.779 1.606 2.839 2.572 5.117 4.662 10.88 8.954 18.79 13.992 8.28 5.274 21.737 11.759 33.854 16.317 5.74 2.16 15.37 5.294 21.057 6.855.943.258 2.148.6 2.678.759.53.159 3.182.826 5.892 1.482 2.71.656 5.12 1.241 5.356 1.3 7.27 1.813 23.882 4.659 33.637 5.763 1.65.186 3.77.435 4.714.553 21.095 2.631 52.732 2.618 77.772-.031 10.809-1.144 19.92-2.537 30.744-4.7 22.306-4.458 42.6-11.066 60.62-19.739l3.524-1.696-1.077-.499c-3.612-1.674-3.927-2.905-3.931-15.372-.004-10.738.092-10.026-1.366-10.055-1.838-.035-2.183-.209-2.112-1.064.156-1.891.377-2.233 1.704-2.648 1.846-.576 1.77-.402 1.77-4.07v-3.251l2.246-1.033c1.235-.568 2.962-1.503 3.837-2.078.96-.631 1.834-1.046 2.2-1.046h.609v10.605l3.588-.082 3.589-.082-.014.618c-.008.34-.128 1.389-.268 2.332l-.254 1.714-3.321.107-3.32.107v8.998c0 10.018-.018 9.891 1.557 10.957.786.533 3.282.531 4.295-.003.39-.206.824-.337.962-.291.138.046 1.313-.592 2.61-1.418 58.638-37.321 55.392-89.865-7.732-125.168-2.591-1.45-11.69-6.091-11.94-6.091-.057 0-1.037-.436-2.178-.969-8.461-3.953-25.465-10.049-34.602-12.404-.294-.076-1.21-.319-2.035-.539-4.414-1.179-6.395-1.67-12.641-3.131-4.833-1.131-15.526-3.125-21.746-4.055-6.385-.954-9.75-1.382-15.211-1.934a166.446 166.446 0 01-3.857-.421c-9.206-1.319-38.244-2.016-52.812-1.267m-51.681 49.692c.257.098.29.635.2 3.158l-.11 3.039 2.216-2.32c3.267-3.421 5.175-4.244 7.545-3.254 2.237.935 2.429 2.839.7 6.934-1.661 3.937-1.982 4.167-3.663 2.631-2.231-2.039-4.744-2.687-5.966-1.539l-.553.519V73.4c.003 10.933-.27 10.256 4.529 11.251.72.149.837.473.588 1.641l-.201.943-8.725-.015-8.725-.016v-1.157c0-1.1.033-1.168.643-1.356 1.809-.556 2.505-.882 2.713-1.269.395-.739.645-8.511.46-14.329-.201-6.343-.164-6.226-2.296-7.308l-1.245-.631.138-.865c.187-1.166.203-1.182 1.36-1.347 2.732-.389 7.517-1.776 9.26-2.684.903-.47.76-.434 1.132-.291m130.877.256c.017.206.012 1.628-.012 3.16l-.042 2.785 1.028-1.163c3.23-3.656 4.774-4.723 6.835-4.726 4.09-.007 4.795 3.123 1.95 8.675-1.302 2.543-1.502 2.622-3.057 1.201-2.16-1.973-4.306-2.615-5.662-1.694l-.75.509-.061 8.241c-.08 10.625-.161 10.307 2.846 11.036 2.663.645 2.689.671 2.253 2.238l-.208.75-8.735-.015-8.736-.016v-1.157c0-1.101.032-1.168.643-1.352 3.233-.977 3.099-.588 3.247-9.458.186-11.24.003-12.282-2.372-13.466l-1.226-.611.147-.889c.194-1.175.157-1.138 1.326-1.306 2.66-.381 7.537-1.805 9.269-2.707.953-.497 1.278-.505 1.317-.035m-98.224.388c13.374 3.063 14.64 24.865 1.745 30.037-9.355 3.752-18.097-.415-20.338-9.697-3.067-12.704 6.455-23.12 18.593-20.34m75.058.008c3.63 1.078 6.633 4.929 7.383 9.467.084.505.396 1.209.695 1.564.764.907.506 2.316-.476 2.605-1.07.315-7.24.971-11.677 1.242-4.564.278-4.577.283-4.395 1.598 1.038 7.483 9.023 10.509 15.31 5.802 2.117-1.585 1.93 1.459-.233 3.82-9.845 10.745-23.736 4.788-23.748-10.185-.01-10.905 8.235-18.558 17.14-15.913m53.632.071c3.322.496 3.047.221 2.75 2.746a90.012 90.012 0 00-.377 4.339c-.154 2.63-.05 2.434-1.318 2.451l-1.004.013-.452-1.714c-.248-.943-.6-2.051-.78-2.464-1.816-4.156-7.678-3.982-7.676.228.002 2.282 1.022 3.166 7.747 6.719 4.33 2.287 6.357 6.487 5.222 10.82-1.808 6.907-9.37 9.817-18.468 7.107-1.803-.537-1.666-.187-2.116-5.377-.421-4.845-.442-4.581.399-4.885 1.34-.485 1.526-.384 1.962 1.072 1.623 5.416 5.739 8.496 9.15 6.845 3.215-1.557 2.079-4.852-2.557-7.416-7.55-4.175-9.762-7.893-8.29-13.934 1.334-5.481 7.064-7.855 15.808-6.55m-100.464 1.383c.239 1.216.076 1.423-1.54 1.946-1.628.526-1.67.704-.914 3.911 1.17 4.959 2.85 11.088 3.122 11.384.31.339 4.535-12.24 5.333-15.877l.129-.589h4.639l.588 1.981c1.23 4.151 5.213 15.158 5.484 15.158.44 0 3.85-12.289 3.85-13.877 0-1.066-.752-1.63-2.81-2.108-1.945-.452-2.025-.539-1.766-1.924l.184-.982 13.166-.07.133.886c.186 1.243-.104 1.624-1.595 2.093-2.366.745-2.995 1.564-4.448 5.786-2.067 6.009-4.612 13.789-5.962 18.231-1.074 3.531-.723 3.213-3.552 3.213h-2.425l-.53-1.607c-2.914-8.855-5.184-14.871-5.445-14.438-.31.511-3.766 10.055-5.135 14.177l-.66 1.988-4.972-.12-.245-.964c-3.176-12.497-5.913-21.816-7.111-24.215-.646-1.293-1.29-1.76-3.042-2.206-1.14-.291-1.173-.321-1.24-1.112-.157-1.867-.91-1.714 8.36-1.691l8.206.021.198 1.005m-34.733 1.517c-5.175 2.251-3.715 22.803 1.783 25.1 3.682 1.538 5.72-2.241 5.737-10.631.019-10.154-3.2-16.348-7.52-14.469m75.639-.112c-1.201.513-2.201 2.824-2.665 6.157-.37 2.649-.38 2.639 2.584 2.639 5.258 0 5.308-.028 4.93-2.829-.594-4.426-2.62-6.92-4.85-5.967m-83.182 40.046c.07.076.246.823.389 1.662.343 1.999 1.014 4.089 2.367 7.367.587 1.422 1.159 2.85 1.715 4.285.34.9.7 1.792 1.076 2.678.256.589.589 1.409.739 1.821.305.837 3.458 8.649 3.762 9.32.204.452.976 2.316 3.28 7.927 2.15 5.233 3.446 8.098 3.7 8.183.342.113 3.44-6.703 7.274-16.003.51-1.237 1.469-3.551 2.132-5.142 4.518-10.853 6.778-17.104 7.944-21.98.089-.375 23.028-.632 23.263-.261.28.442.217 3.05-.083 3.429-.15.188-.935.457-1.768.605-5.026.895-6.376 1.601-7.118 3.726-.725 2.077-.21 34.912.798 50.81.373 5.891 1.026 6.59 7.492 8.021 2.458.545 2.262.344 2.229 2.288-.041 2.474.619 2.317-8.366 1.995-5.34-.192-9.37-.218-13.246-.086-3.063.104-6.92.191-8.57.192l-3 .002-.062-1.801c-.076-2.186-.181-2.076 2.552-2.697 4.877-1.11 5.008-1.309 5.346-8.142.285-5.742.17-40.431-.132-40.532-.123-.041-.527.674-.897 1.589a3598.616 3598.616 0 00-6.42 16.232c-.415 1.061-1.267 3.23-1.893 4.821-3.217 8.172-4.114 10.486-5.4 13.926a755.87 755.87 0 01-1.816 4.821c-.634 1.643-2.263 6.176-3.1 8.624-.866 2.538-.745 2.459-3.595 2.365l-1.921-.063-.194-.75c-.702-2.713-3.068-10.003-5.078-15.64-.713-1.999-1.424-3.999-2.135-5.999-.565-1.59-2.3-6.314-3.853-10.498a2976.528 2976.528 0 01-3.097-8.355c-.828-2.296-2.11-5.777-2.366-6.428-.163-.412-.55-1.424-.858-2.249-1.071-2.858-1.005-2.733-1.296-2.425-.63.669-2.292 39.608-1.841 43.148.433 3.404 1.854 4.429 7.848 5.665 2.808.579 2.563.419 2.64 1.723.038.641-.042 1.539-.177 1.995l-.246.829-4.643-.187a218.945 218.945 0 00-17.734.005l-4.52.19-.14-.699c-.187-.939-.172-2.835.026-3.146.17-.268.193-.274 3.155-.837 6.004-1.142 6.564-2.301 7.717-15.945.78-9.241.973-11.626 1.17-14.569.115-1.709.308-4.215.429-5.571.12-1.355.317-3.958.437-5.784.12-1.827.316-4.753.434-6.503.794-11.724.477-12.32-7.402-13.915l-2.356-.477.053-1.497c.029-.823.106-1.724.17-2.002l.118-.505 12.47.153c6.858.085 12.528.215 12.598.291m127.076 21.27c.003.279-.15 1.182-.34 2.006-.525 2.293-.8 29.811-.298 30.004 1.078.414 5.235-3.601 7.33-7.08 1.294-2.149.974-2.897-1.43-3.34-.79-.146-1.552-.337-1.695-.425-.242-.15-.31-1.97-.085-2.333.086-.138 8.823-.511 12.538-.534l1.393-.009.069.726c.125 1.309-.093 1.701-1.09 1.95-1.204.302-3.205 1.237-3.851 1.8-.638.556-5.023 5.559-5.672 6.471l-.471.662 1.229 2.123c2.164 3.738 6.155 9.536 8.154 11.846 1.235 1.427 2.059 1.911 3.644 2.139 1.227.177 1.455.551 1.072 1.762-.37 1.168-.631 1.219-6.317 1.247l-3.876.019-1.267-.633c-1.673-.837-3.232-2.994-7.051-9.758-1.803-3.194-2.19-3.75-2.613-3.75-.771 0-.14 10.187.638 10.291.026.003.723.229 1.548.502l1.499.497-.01 1.118c-.011 1.27-.288 1.581-1.275 1.428-1.63-.252-8.251-.344-11.248-.156-3.764.236-3.857.209-3.857-1.146 0-1.057.158-1.212 1.607-1.575 1.367-.342 1.764-.747 2.03-2.07.304-1.515.507-24.486.28-31.945-.22-7.336-.14-7.071-2.343-7.728l-1.466-.437v-2.291l2.999-.364c2.979-.361 7.287-1.23 8.834-1.782.937-.335 1.38-.091 1.39.765m-25.306 17.616c.013.134.005 1.498-.016 3.03l-.04 2.785 2.169-2.294c2.67-2.826 4.22-3.731 6.06-3.541 3.896.402 4.326 3.424 1.31 9.182-1.072 2.046-1.382 2.107-3.031.598-2.108-1.928-4.356-2.489-5.691-1.42l-.61.488.029 8.536c.036 10.7-.172 10.093 3.705 10.85 1.61.314 1.756.493 1.458 1.789-.234 1.016-.534 1.235-1.51 1.104-1.795-.241-9.59-.333-12.515-.147-3.922.249-3.803.287-3.723-1.208l.063-1.185 1.36-.371c2.314-.632 2.325-.666 2.505-8.026.273-11.2-.04-13.337-2.12-14.478-1.395-.766-1.46-.859-1.296-1.88.109-.682.25-.915.597-.98 4.787-.899 8.562-1.974 10.058-2.865.697-.415 1.198-.402 1.238.033m-25.188.254c2.523.653 4.972 2.656 6.013 4.918 1.12 2.436 1.185 3.064 1.164 11.403-.024 9.952.265 10.684 3.697 9.367.832-.32.269 2.756-.641 3.506-2.206 1.817-5.9 2.769-8.35 2.152-1.002-.252-2.427-1.424-2.427-1.997 0-.165-.094-.547-.21-.849l-.208-.549-1.603 1.047c-2.241 1.463-4.663 2.439-6.056 2.44-4.462.004-7.556-5.899-6.076-11.594.623-2.399.616-2.396 8.453-4.997 5.623-1.867 5.63-1.872 5.41-4.224-.335-3.587-2.624-5.599-6.06-5.327-2.023.161-2.494.553-3.756 3.123-1.194 2.433-1.456 2.578-2.925 1.616-.994-.652.02-4.946 1.427-6.044 4.03-3.145 9.049-4.793 12.148-3.991m89.153.303c3.258 1.188 5.797 4.541 6.788 8.966.167.743.507 1.569.757 1.835.555.59.592 1.644.08 2.229-.521.594-1.85.807-8.302 1.335l-6.893.564c-1.557.127-1.642.252-1.33 1.951 1.273 6.891 8.837 9.615 15.007 5.403 1.676-1.144 1.885-.981 1.437 1.122-.675 3.168-6.261 7.062-10.997 7.665-8.503 1.083-14.264-5.172-14.275-15.5-.01-8.738 4.576-14.662 12.444-16.076 1.229-.221 4.026.047 5.284.506m-6.462 2.764c-1.566.968-2.248 2.711-2.776 7.1-.193 1.608-.177 1.614 3.775 1.557 4.334-.062 4.172.05 3.85-2.662-.552-4.641-2.714-7.313-4.85-5.995m-86.31 13.641c-3.255 1.32-3.37 1.455-3.377 4-.011 3.509 3.322 6.436 5.483 4.816.668-.5 1.027-9.829.377-9.773-.087.008-1.204.438-2.483.957"
        className="fill-current text-yellow"
      />
    </svg>
  );
}
