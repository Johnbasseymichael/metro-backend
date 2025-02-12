import type { Schema, Struct } from '@strapi/strapi';

export interface GeneralNavDropdown extends Struct.ComponentSchema {
  collectionName: 'components_general_nav_dropdowns';
  info: {
    displayName: 'nav_dropdown';
  };
  attributes: {
    subpage_name: Schema.Attribute.String;
    subpage_path: Schema.Attribute.String;
  };
}

export interface GeneralPageSection extends Struct.ComponentSchema {
  collectionName: 'components_general_page_sections';
  info: {
    description: '';
    displayName: 'sub_page_section';
  };
  attributes: {
    detailed_image: Schema.Attribute.Media<'files' | 'images'>;
    heading: Schema.Attribute.String;
    link: Schema.Attribute.Component<'page-section-component.link', true>;
    list: Schema.Attribute.Blocks;
    paragraph: Schema.Attribute.Blocks;
    section_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface GeneralSubpages extends Struct.ComponentSchema {
  collectionName: 'components_general_subpages';
  info: {
    description: '';
    displayName: 'subpages';
  };
  attributes: {
    sub_page_name: Schema.Attribute.String & Schema.Attribute.Required;
    sub_page_path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'/'>;
    sub_page_section: Schema.Attribute.Component<'general.page-section', true>;
  };
}

export interface PageSectionComponentLink extends Struct.ComponentSchema {
  collectionName: 'components_page_section_component_links';
  info: {
    description: '';
    displayName: 'link';
  };
  attributes: {
    link: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'https://'>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'general.nav-dropdown': GeneralNavDropdown;
      'general.page-section': GeneralPageSection;
      'general.subpages': GeneralSubpages;
      'page-section-component.link': PageSectionComponentLink;
    }
  }
}
