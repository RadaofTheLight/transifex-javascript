import {
  onEvent, offEvent, LOCALE_CHANGED, tx, t,
} from '@transifex/native';

export default {
  name: 'UT',
  inheritAttrs: false,
  data() {
    return {
      lang: tx.getCurrentLocale(),
    };
  },
  mounted() {
    const onLanguageChange = (l) => {
      this.$data.lang = l;
    };
    onEvent(LOCALE_CHANGED, onLanguageChange);
    this.$on('hook:beforeDestroy', () => offEvent(
      LOCALE_CHANGED,
      onLanguageChange,
    ));
  },
  render(h) {
    const innerHTML = t(this.$attrs._str, { ...this.$attrs }, this.$data.lang);
    const element = this.$attrs._inline ? 'span' : 'div';
    return h(element, {
      domProps: { innerHTML },
    });
  },
};
