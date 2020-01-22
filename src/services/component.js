import componentList from '@/assets/datas/component-list.json'
import {
  PageConfig,
  SectionConfig,
  ColumnConfig,
  HeadingConfig,
  DividerConfig,
  TextConfig,
  ImageConfig,
  GalleryConfig,
  IconBoxConfig,
  VideoConfig,
  BlogPostsConfig,
  ButtonConfig,
  TogglesConfig,
  IconListConfig,
  CodeBlockConfig,
  TestimonialsConfig,
  ContactFormConfig,
  SocialIconsConfig,
  SurgeryHoursConfig,
  AppointmentsConfig,
  DoctorsConfig
} from '@/assets/datas/components/'

class ComponentService {
  getComponentList () {
    console.log('@servicecomponentList', componentList)
    return componentList
   
  }
  getConfig (component) {
    switch (component) {
      case 'page': return PageConfig
      case 'section': return SectionConfig
      case 'column': return ColumnConfig
      case 'heading': return HeadingConfig
      case 'divider': return DividerConfig
      case 'text': return TextConfig
      case 'image': return ImageConfig
      case 'gallery': return GalleryConfig
      case 'icon-box': return IconBoxConfig
      case 'blog-posts': return BlogPostsConfig
      case 'button': return ButtonConfig
      case 'toggles': return TogglesConfig
      case 'icon-list': return IconListConfig
      case 'video': return VideoConfig
      case 'code-block': return CodeBlockConfig
      case 'testimonials': return TestimonialsConfig
      case 'contact-form': return ContactFormConfig
      case 'social-icons': return SocialIconsConfig
      case 'surgery-hours': return SurgeryHoursConfig
      case 'appointments': return AppointmentsConfig
      case 'doctors': return DoctorsConfig
    }
    // return layout
  }
}

export default new ComponentService()
