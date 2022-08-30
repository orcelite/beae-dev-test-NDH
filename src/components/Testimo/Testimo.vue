<template>
  <div :class="classNames.wrap" :style="css.wrap">
    <div class="grid grid-cols-3 gap-8">
      <div v-for="(item, i) in items" :key="i">
        <component :is="item.child_styles.content_tag || 'div'" :class="`${getSelected &&
        item.id === getSelected.id &&
        item.child_target === 'content'
        ? 'active'
        : ''
        } ${classNames_child(item).content}`" :style="css_child(item).content"
          @click.stop="settingChildOpen(item, 'content')">
          {{  item.content  }}
        </component>

        <div class="flex">
          <div class="flex-shrink-0">
            <div class="rounded-full h-14 w-14 border overflow-hidden">
              <img v-if="item.avatar" :src="item.avatar" :alt="item.title" />
              <div v-else class="w-full h-full bg-purple-400"></div>
            </div>
          </div>
          <div class="flex-grow ml-3 text-left">
            <component :is="item.child_styles.title_tag || 'div'" :class="`${getSelected &&
            item.id === getSelected.id &&
            item.child_target === 'title'
            ? 'active'
            : ''
            } ${classNames_child(item).title}`" :style="css_child(item).title"
              @click.stop="settingChildOpen(item, 'title')">
              {{  item.title  }}
            </component>
            <div>{{  item.position  }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { clone } from "../../functions/helpers";

export default {
  props: {
    elem: {
      type: Object,
      default: () => { },
    },
  },
  data() {
    return {};
  },
  mounted() { },
  methods: {
    ...mapActions(["settingOpen"]),
    settingChildOpen(item, target) {

      item.parent_id = this.elem.id;
      item.child_target = target;

      this.$store.commit("settingOpen", clone(item));

    },
    classNames_child(item) {
      const elem = item;

      const contentClass = ["builder-elem", "mb-5"];
      elem.child_styles.content_typography &&
        contentClass.push(elem.child_styles.content_typography);

      const titleClass = ["builder-elem"];
      elem.child_styles.title_typography &&
        titleClass.push(elem.child_styles.title_typography);

      return {
        content: contentClass.join(" "),
        title: titleClass.join(" "),
      };
    },
    css_child(item) {
      const elem = item;
      const child_styles = elem.child_styles;

      const contentCss = [];
      child_styles.align && contentCss.push(`text-align: ${child_styles.align}`);
      child_styles.content_color && contentCss.push(`color: ${child_styles.content_color}`);

      const titleCss = [];
      child_styles.title_color && titleCss.push(`color: ${child_styles.title_color}`);

      return {
        content: contentCss.join(";"),
        title: titleCss.join(";"),
      };
    },
  },
  computed: {
    ...mapGetters(["getSelected"]),
    items() {
      return this.elem.items;
    },
    classNames() {
      const elem = this.elem;

      const wrapClass = [];
      elem.styles.boxShadow && wrapClass.push(elem.styles.boxShadow);
      elem.styles.padding && wrapClass.push(elem.styles.padding);

      return {
        wrap: wrapClass.join(" "),
      };
    },
    css() {
      const elem = this.elem;
      const styles = elem.styles;

      const wrapCss = [];
      styles.bgColor && wrapCss.push(`background-color: ${styles.bgColor}`);
      if (styles.border_width) {
        wrapCss.push(`border: ${styles.border_width} solid`);
        styles.border_style &&
          wrapCss.push(`border-style: ${styles.border_style}`);
        styles.border_color &&
          wrapCss.push(`border-color: ${styles.border_color}`);
      }
      styles.border_radius &&
        wrapCss.push(`border-radius: ${styles.border_radius}`);

      return {
        wrap: wrapCss.join(";"),
      };
    },
  },
};
</script>
