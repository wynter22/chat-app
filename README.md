# chat-ui

> 실행방법

1. 패키지 설치 및 빌드

```
cd chat-ui
yarn install
yarn start
```

2. ios 빌드

```
cd chat-ui/ios && pod install
cd chat-ui
react-native run-ios
```

3. andriod 빌드

```
cd chat-ui
react-native run-andriod
```

#

> 구현내용

#### 1. 구현 사항

- React Native를 활용하여 App 구현
- MobX를 이용한 상태 관리
- React Router를 통한 라우팅
- React Native Progress로 이미지 업로드 progress bar 구현

#### 2. Dependencies

| NO  | Dependency            | Version |
| --- | :-------------------- | ------- |
| 1   | react-native          | ~0.63.4 |
| 2   | react-router-native   | ^5.2.0  |
| 3   | react-native-progress | ^5.0.0  |
| 4   | mobx-react            | ^2.29.1 |

#

> 고민되었던 부분

#### 1. React 앱 구현

- React를 처음 써보았기때문에 Web이 아닌 App을 구현하는 문제는 저에게 가장 어려운 부분이었습니다.
- 해결 방안
  - React Native 적용

#### 2. State 관리 라이브러리 선정

- 다양한 상태 관리 라이브러리 사이에서 사용하기 쉽고, 유연한 라이브러리가 어떤 것일지 고민하게 되었습니다.
- 해결 방안
  - Mobx 선정

#### 3. MobX observable 변경 후 화면이 Re-Render되지 않는 문제

- MobX의 observable을 update 한후 즉각적으로 재렌더링이 되지 않는 문제가 발생하여 해결방안을
  찾기 위해 많은 고민을 했습니다.
- 해결 방안
  - store에 아래의 코드를 추가하여 해결했습니다.
    ```
    class SomeStore {
         constructor() {
            makeAutoObservable(this, {...});
         }

         (생략...)
     }
    ```
