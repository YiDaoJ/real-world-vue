import { Store } from 'vuex'
import { iEvent } from './types'

declare module '@vue/runtime-core' {
  // declare your own store states
  interface State {
    user: string
    events: iEvent[]
    event: iEvent
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
