import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createMetaManager } from 'vue-meta'
import './assets/css/tailwind.css';

import {
  // create naive ui
  create,
  NAvatar,
  NBadge,
  // component
  NButton,
  NCard,
  NCarousel,
  NCarouselItem,
  NCollapseTransition,
  NDialog,
  NDialogProvider,
  NGrid,
  NGridItem,
  NIcon,
  NIconWrapper,
  NInput,
  NMessageProvider,
  NModal,
  NNotificationProvider,
  NProgress,
  NSelect,
  NForm,
  NFormItem,
  NPageHeader,
  NInputNumber,
  NRadio,
  NRadioGroup,
  NRadioButton,
  NImage,
  NCheckbox,
  NCheckboxGroup,
  NSpace,
  NSkeleton,
  NEmpty,
  NDivider,
  NResult
} from 'naive-ui'

const naive = create({
  components: [
    NButton,
    NCard,
    NInput,
    NSelect,
    NGrid,
    NGridItem,
    NProgress,
    NIcon,
    NIconWrapper,
    NDialog,
    NDialogProvider,
    NMessageProvider,
    NModal,
    NNotificationProvider,
    NCollapseTransition,
    NAvatar,
    NBadge,
    NCarousel,
    NCarouselItem,
    NForm,
    NFormItem,
    NPageHeader,
    NInputNumber,
    NRadio,
    NRadioGroup,
    NRadioButton,
    NImage,
    NCheckbox,
    NCheckboxGroup,
    NSpace,
    NSkeleton,
    NEmpty,
    NDivider,
    NResult
  ]
})

const app = createApp(App)

app.use(router)
app.use(naive)
app.use(createMetaManager())

app.mount('#app')
