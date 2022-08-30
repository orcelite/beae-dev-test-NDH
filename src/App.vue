<template>
  <div class="flex flex-col w-full min-h-screen shado gap-3 bg-gray-200">
    <div id="header" class="flex justify-between p-3 bg-gray-100">
      <img src="./assets/logo.png" alt="" style="height: 40px" />
      <button @click="exportJSON"
        class="flex items-center pointer-events-auto rounded-md bg-emerald-600 py-2 px-3 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500">
        <span>Import/Export JSON</span>
      </button>
    </div>

    <div class="flex-grow flex gap-3 bg-">
      <div id="left" ref="left" class="flex-shrink-0 w-1/6 p-2">
        <draggable class="dragArea flex flex-wrap" :list="elems" :group="{ name: 'builder', pull: 'clone', put: false }"
          :clone="onClone" item-key="id">
          <template #item="{ element }">
            <div @dragstart="onDragStart(element)" @dragend="onDragEnd"
              class="py-2 px-4 w-fit list-group bg-white hover:border-emerald-400 border-2 cursor-pointer">
              <div>{{  element.label  }}</div>
            </div>
          </template>
        </draggable>
      </div>

      <div id="main" class="flex-grow p-2 ">
        <div class="h-full w-full flex items-start" v-show="isEmptyBuilder">
          <div
            class="border-neutral-400 border-dashed border-4 text-center w-full h-60 flex items-center justify-center">
            DRAG ELEMENT HERE
          </div>
        </div>

        <draggable v-show="!isEmptyBuilder" :class="`dragArea h-full w-full border p-2 ${dragging ? 'dragging' : ''
        }`" item-key="id" :list="xBuilders" group="builder" @click.self="removeSelected">
          <template #item="{ element }">
            <div :class="`builder-elem ${getSelected && element.id === getSelected.id ? 'active' : ''
            }`">
              <div class="builder-elem-remove" @click="removeElem(element)" title="Xoá">
                &times;
              </div>
              <component @click="$store.commit('settingOpen', element)" :is="element.component" :elem="element">
              </component>
            </div>
          </template>
        </draggable>
      </div>

      <div id="right" class="flex-shrink-0 w-1/6 p-2 bg-white text-left" ref="right">
        <div v-if="getSelected">
          <component :is="getSelected.component_setting" @draft="settingDraft"></component>
        </div>

        <div v-else class="pt-20 text-center">
          CLICK TO ELEMENT TO SETTINGS
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import draggable from "vuedraggable";
import elems from "./functions/elems";
import { mapActions, mapGetters } from "vuex";
import { uuid, clone, _typeof } from "./functions/helpers";
import HeadingElem from "./components/Heading/HeadingElem.vue";
import HeadingSetting from "./components/Heading/HeadingSetting.vue";
import FeatureElem from "./components/Feature/FeatureElem.vue";
import FeatureSetting from "./components/Feature/FeatureSetting.vue";
import TestimoElem from "./components/Testimo/Testimo.vue";
import TestimoSetting from "./components/Testimo/TestimoSetting.vue";
import SimpleTextSetting from "./components/SimpleText/SimpleTextSetting.vue";
import downloadjs from "downloadjs";
export default {
  components: {
    HeadingElem,
    HeadingSetting,
    FeatureElem,
    FeatureSetting,
    TestimoElem,
    TestimoSetting,
    SimpleTextSetting,
    draggable,
  },
  data() {
    return {
      elems: elems,
      dragging: false,
      isEmptyBuilder: true,
    };
  },
  async mounted() {
  },
  methods: {
    ...mapActions([
      "set",
      "add",
      "update",
      "remove",
      "setSelect",
      "removeSelected",
      "setSafeSelect",
      "settingOpen",
    ]),
    onDragStart(elem) {
      this.dragging = true;
    },
    onClone(props) {
      props = clone(props);

      //@todo
      let items = props.items;
      if (items && Array.isArray(items)) {
        props.items = items.map((h) => {
          h.id = uuid();
          return h;
        });
      }
      return {
        ...props,
        id: uuid(),
      };
    },
    onDragEnd() {
      this.dragging = false;
    },
    settingDraft(val) {
      Object.assign(this.getSelected, val);
    },
    removeElem(item) {
      if (!window.confirm("Are you sure?")) {
        return;
      }

      if (this.getSelected && this.getSelected.id === item.id) {
        this.setSelect(null);
      }

      this.remove(item);
      this.updateEmpty();
    },
    updateEmpty() {
      if (this.xBuilders.length) {
        this.isEmptyBuilder = false;
      } else {
        this.isEmptyBuilder = true;
      }
    },
    exportJSON() {
      const time = new Date().getTime();
      downloadjs(
        JSON.stringify(this.xBuilders),
        `${time}_builders.json`,
        "text/plain"
      );
    },
  },
  watch: {
    dragging(val) {
      this.isEmptyBuilder = !this.xBuilders.length && !val;
    },
  },
  computed: {
    ...mapGetters([
      "xBuilders",
      "getSelected",
    ]),
  },
};
</script>
