document.addEventListener('alpine:init', () => {

  // ===== Translations =====
  const messages = {
    'zh-CN': {
      title: '汪小鱼',
      subtitle: 'CoderWang | 汪小鱼',
      site_desc: '汪小鱼(CoderWang)的个人网站 - 前端开发、开源爱好者、终身学习者。提供URL编解码、二维码生成等在线工具。',
      external_links: '外部链接',
      blog: '博客',
      juejin: '掘金',
      toolbox: '小鱼的工具箱',
      url_translate: 'URL 转码',
      url_qrcode: 'URL 转二维码',
      china_universities: '中国本科院校分布',
      more_coming: '更多功能开发中',
      welcome: '欢迎你！',
      welcome_desc: '这里是汪小鱼的空间，一个热爱技术、热爱生活的地方。',
      tag_frontend: '前端开发',
      tag_opensource: '开源爱好者',
      tag_learner: '终身学习者',
      tag_tools: '工具控',
      quote: '读更多好书，写更酷的代码，做灵魂有趣的人。',
      countdown_title: '新年倒计时',
      countdown_unit: '天',
      contact: '联系方式',
      email: '邮箱',
      copyright: '版权所有',
      // URL translate page
      url_tool_title: 'URL 编码 / 解码',
      back_home: '返回首页',
      input_label: '输入',
      output_label: '输出',
      input_placeholder: '请输入需要转码的 URL 或文本...',
      output_placeholder: '处理结果将显示在这里...',
      btn_encode: '编码 Encode',
      btn_decode: '解码 Decode',
      btn_clear: '清空',
      btn_copy: '复制',
      copied: '已复制到剪贴板',
      // QR code page
      qr_tool_title: 'URL 转二维码',
      qr_input_label: '输入 URL 或文本',
      qr_input_placeholder: '请输入需要生成二维码的 URL 或任意文本...',
      btn_generate: '生成二维码',
      btn_download: '下载 PNG',
      qr_empty: '输入内容后点击生成按钮，二维码将显示在这里',
      qr_loading_fail: '二维码库加载失败，请刷新页面重试',
      qr_empty_warn: '请输入 URL 或文本',
      download_fail: '无法下载，请重试',
      // Dev tools page
      dev_tools: '开发者工具',
      dev_tools_title: '开发者工具箱',
      tab_json: 'JSON 格式化',
      tab_base64: 'Base64 编解码',
      tab_timestamp: '时间戳转换',
      tab_uuid: 'UUID 生成',
      json_input_placeholder: '粘贴 JSON 数据...',
      json_output_placeholder: '格式化结果将显示在这里...',
      btn_format: '格式化',
      btn_compress: '压缩',
      btn_validate: '校验',
      json_valid: 'JSON 格式正确',
      json_invalid: 'JSON 格式错误',
      base64_input_placeholder: '请输入需要编解码的文本...',
      base64_output_placeholder: '结果将显示在这里...',
      btn_base64_encode: 'Base64 编码',
      btn_base64_decode: 'Base64 解码',
      base64_decode_error: '解码失败，请检查输入是否为有效的 Base64 字符串',
      timestamp_now: '当前时间戳',
      timestamp_now_sec: '秒',
      timestamp_now_ms: '毫秒',
      timestamp_to_date: '时间戳 → 日期',
      timestamp_placeholder: '输入 Unix 时间戳（秒）...',
      date_to_timestamp: '日期 → 时间戳',
      btn_convert: '转换',
      preset_now: '现在',
      preset_today_start: '今天 00:00',
      preset_week_start: '本周一 00:00',
      preset_month_start: '本月 1 日 00:00',
      uuid_label: '生成的 UUID',
      btn_generate_uuid: '生成 UUID',
      btn_batch: '批量生成',
      uuid_copied: 'UUID 已复制',
    },
    'en-US': {
      title: 'CoderWang',
      subtitle: 'CoderWang | 汪小鱼',
      site_desc: 'CoderWang\'s personal website - Frontend developer, open source enthusiast, lifelong learner. Online tools for URL encoding & QR code generation.',
      external_links: 'External Links',
      blog: 'Blog',
      juejin: 'JueJin',
      toolbox: 'Toolbox',
      url_translate: 'URL Encode/Decode',
      url_qrcode: 'URL to QR Code',
      china_universities: 'China Universities Map',
      more_coming: 'More coming soon',
      welcome: 'Welcome!',
      welcome_desc: 'This is CoderWang\'s space — a place for tech and life.',
      tag_frontend: 'Frontend Dev',
      tag_opensource: 'Open Source',
      tag_learner: 'Lifelong Learner',
      tag_tools: 'Tool Enthusiast',
      quote: 'Read more good books, write cooler code, be an interesting soul.',
      countdown_title: 'New Year Countdown',
      countdown_unit: 'days',
      contact: 'Contact',
      email: 'Email',
      copyright: 'All rights reserved',
      // URL translate page
      url_tool_title: 'URL Encode / Decode',
      back_home: 'Back Home',
      input_label: 'Input',
      output_label: 'Output',
      input_placeholder: 'Enter URL or text to encode/decode...',
      output_placeholder: 'Result will appear here...',
      btn_encode: 'Encode',
      btn_decode: 'Decode',
      btn_clear: 'Clear',
      btn_copy: 'Copy',
      copied: 'Copied to clipboard',
      // QR code page
      qr_tool_title: 'URL to QR Code',
      qr_input_label: 'Input URL or Text',
      qr_input_placeholder: 'Enter URL or text to generate QR code...',
      btn_generate: 'Generate QR Code',
      btn_download: 'Download PNG',
      qr_empty: 'Enter content and click generate — the QR code will appear here',
      qr_loading_fail: 'QR code library failed to load. Please refresh.',
      qr_empty_warn: 'Please enter a URL or text',
      download_fail: 'Download failed, please try again',
      // Dev tools page
      dev_tools: 'Dev Tools',
      dev_tools_title: 'Developer Toolbox',
      tab_json: 'JSON Formatter',
      tab_base64: 'Base64 Codec',
      tab_timestamp: 'Timestamp',
      tab_uuid: 'UUID Gen',
      json_input_placeholder: 'Paste JSON data...',
      json_output_placeholder: 'Formatted result will appear here...',
      btn_format: 'Format',
      btn_compress: 'Compress',
      btn_validate: 'Validate',
      json_valid: 'Valid JSON',
      json_invalid: 'Invalid JSON',
      base64_input_placeholder: 'Enter text to encode/decode...',
      base64_output_placeholder: 'Result will appear here...',
      btn_base64_encode: 'Base64 Encode',
      btn_base64_decode: 'Base64 Decode',
      base64_decode_error: 'Decode failed, check if input is valid Base64',
      timestamp_now: 'Current Timestamp',
      timestamp_now_sec: 'sec',
      timestamp_now_ms: 'ms',
      timestamp_to_date: 'Timestamp → Date',
      timestamp_placeholder: 'Enter Unix timestamp (seconds)...',
      date_to_timestamp: 'Date → Timestamp',
      btn_convert: 'Convert',
      preset_now: 'Now',
      preset_today_start: 'Today 00:00',
      preset_week_start: 'Monday 00:00',
      preset_month_start: '1st Day 00:00',
      uuid_label: 'Generated UUID',
      btn_generate_uuid: 'Generate UUID',
      btn_batch: 'Batch Generate',
      uuid_copied: 'UUID copied',
    }
  };

  // ===== I18n Store =====
  Alpine.store('i18n', {
    locale: localStorage.getItem('locale') || 'zh-CN',

    init() {
      this.apply();
    },

    t(key) {
      return (messages[this.locale] && messages[this.locale][key]) || key;
    },

    toggle() {
      this.locale = this.locale === 'zh-CN' ? 'en-US' : 'zh-CN';
      localStorage.setItem('locale', this.locale);
      this.apply();
    },

    apply() {
      document.documentElement.lang = this.locale;
      // Update title if this is the home page (index.html)
      if (document.title === messages['zh-CN'].title || document.title === messages['en-US'].title) {
        document.title = this.t('title');
      }
    }
  });

  // ===== Theme Store =====
  Alpine.store('theme', {
    dark: false,

    init() {
      // localStorage takes priority; fall back to system preference
      const stored = localStorage.getItem('theme');
      if (stored === 'dark') {
        this.dark = true;
      } else if (stored === 'light') {
        this.dark = false;
      } else {
        this.dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
      this.apply();

      // Listen for system theme changes
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
          this.dark = e.matches;
          this.apply();
        }
      });
    },

    toggle() {
      this.dark = !this.dark;
      localStorage.setItem('theme', this.dark ? 'dark' : 'light');
      this.apply();
    },

    apply() {
      document.documentElement.classList.toggle('dark', this.dark);
    }
  });

});
