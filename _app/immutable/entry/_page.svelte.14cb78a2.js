import { H as identity, S as SvelteComponent, i as init, s as safe_not_equal, k as element, a as space, l as claim_element, m as children, h as detach, c as claim_space, n as attr, p as set_style, b as insert_hydration, I as append_hydration, J as listen, K as update_keyed_each, g as transition_in, d as transition_out, f as check_outros, L as component_subscribe, o as onMount, e as empty, M as destroy_block, q as text, r as claim_text, u as set_data, N as add_render_callback, O as create_in_transition, G as noop, P as run_all, v as group_outros, Q as create_out_transition, R as svg_element, y as create_component, T as claim_svg_element, z as claim_component, A as mount_component, B as destroy_component, w as binding_callbacks } from "../chunks/index.0616d844.js";
import { w as writable } from "../chunks/index.18cba605.js";
import { C as CV } from "../chunks/CV.325e395f.js";
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function fade(node, { delay = 0, duration = 400, easing = identity } = {}) {
  const o = +getComputedStyle(node).opacity;
  return {
    delay,
    duration,
    easing,
    css: (t) => `opacity: ${t * o}`
  };
}
function scale(node, { delay = 0, duration = 400, easing = cubicOut, start = 0, opacity = 0 } = {}) {
  const style = getComputedStyle(node);
  const target_opacity = +style.opacity;
  const transform = style.transform === "none" ? "" : style.transform;
  const sd = 1 - start;
  const od = target_opacity * (1 - opacity);
  return {
    delay,
    duration,
    easing,
    css: (_t, u) => `
			transform: ${transform} scale(${1 - sd * u});
			opacity: ${target_opacity - od * u}
		`
  };
}
const _page_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[44] = list[i];
  return child_ctx;
}
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[47] = list[i];
  const constants_0 = (
    /*$snake*/
    child_ctx[13].slice(-1)[0]
  );
  child_ctx[48] = constants_0;
  const constants_1 = (
    /*col*/
    child_ctx[47] == /*food*/
    child_ctx[1][0] && /*row*/
    child_ctx[44] == /*food*/
    child_ctx[1][1] ? "food" : (
      /*$snake*/
      child_ctx[13].some(function func(...args) {
        return (
          /*func*/
          ctx[18](
            /*col*/
            child_ctx[47],
            /*row*/
            child_ctx[44],
            ...args
          )
        );
      }) ? (
        /*col*/
        child_ctx[47] == /*head*/
        child_ctx[48][0] && /*row*/
        child_ctx[44] == /*head*/
        child_ctx[48][1] ? "head" : "snake"
      ) : "empty"
    )
  );
  child_ctx[49] = constants_1;
  const constants_2 = (
    /*tileType*/
    child_ctx[49] == "food" ? "transparent" : (
      /*tileType*/
      child_ctx[49] == "snake" ? "rgba(255,255,255,0.15)" : (
        /*tileType*/
        child_ctx[49] == "head" ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.4)"
      )
    )
  );
  child_ctx[50] = constants_2;
  return child_ctx;
}
function create_each_block_1(key_1, ctx) {
  let div;
  let div_id_value;
  return {
    key: key_1,
    first: null,
    c() {
      div = element("div");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { id: true, style: true, class: true });
      children(div).forEach(detach);
      this.h();
    },
    h() {
      attr(div, "id", div_id_value = "tile-" + /*col*/
      ctx[47] + "-" + /*row*/
      ctx[44]);
      set_style(
        div,
        "background-color",
        /*tileColor*/
        ctx[50]
      );
      set_style(div, "border", "1px solid rgba(32, 44, 89, 0.8)");
      attr(div, "class", "w-full h-full svelte-1bz1tbw");
      this.first = div;
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty[0] & /*cols, rows*/
      4097 && div_id_value !== (div_id_value = "tile-" + /*col*/
      ctx[47] + "-" + /*row*/
      ctx[44])) {
        attr(div, "id", div_id_value);
      }
      if (dirty[0] & /*cols, food, rows, $snake*/
      12291) {
        set_style(
          div,
          "background-color",
          /*tileColor*/
          ctx[50]
        );
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_each_block(key_1, ctx) {
  let first;
  let each_blocks = [];
  let each_1_lookup = /* @__PURE__ */ new Map();
  let each_1_anchor;
  let each_value_1 = [...Array(
    /*cols*/
    ctx[0]
  ).keys()];
  const get_key = (ctx2) => (
    /*col*/
    ctx2[47]
  );
  for (let i = 0; i < each_value_1.length; i += 1) {
    let child_ctx = get_each_context_1(ctx, each_value_1, i);
    let key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block_1(key, child_ctx));
  }
  return {
    key: key_1,
    first: null,
    c() {
      first = empty();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
      this.h();
    },
    l(nodes) {
      first = empty();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(nodes);
      }
      each_1_anchor = empty();
      this.h();
    },
    h() {
      this.first = first;
    },
    m(target, anchor) {
      insert_hydration(target, first, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert_hydration(target, each_1_anchor, anchor);
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty[0] & /*cols, rows, food, $snake*/
      12291) {
        each_value_1 = [...Array(
          /*cols*/
          ctx[0]
        ).keys()];
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value_1, each_1_lookup, each_1_anchor.parentNode, destroy_block, create_each_block_1, each_1_anchor, get_each_context_1);
      }
    },
    d(detaching) {
      if (detaching)
        detach(first);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].d(detaching);
      }
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
function create_if_block_7(ctx) {
  let div;
  let span2;
  let span0;
  let t0;
  let span1;
  let t1;
  let t2;
  let t3_value = (
    /*gamePaused*/
    ctx[4] ? "resume" : "pause"
  );
  let t3;
  let div_class_value;
  let mounted;
  let dispose;
  return {
    c() {
      div = element("div");
      span2 = element("span");
      span0 = element("span");
      t0 = text("press space");
      span1 = element("span");
      t1 = text("click here");
      t2 = text("\n          to ");
      t3 = text(t3_value);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      span2 = claim_element(div_nodes, "SPAN", { class: true });
      var span2_nodes = children(span2);
      span0 = claim_element(span2_nodes, "SPAN", { class: true });
      var span0_nodes = children(span0);
      t0 = claim_text(span0_nodes, "press space");
      span0_nodes.forEach(detach);
      span1 = claim_element(span2_nodes, "SPAN", { class: true });
      var span1_nodes = children(span1);
      t1 = claim_text(span1_nodes, "click here");
      span1_nodes.forEach(detach);
      t2 = claim_text(span2_nodes, "\n          to ");
      t3 = claim_text(span2_nodes, t3_value);
      span2_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span0, "class", "hidden lg:inline");
      attr(span1, "class", "inline lg:hidden");
      attr(span2, "class", "bg-black text-xs font-semibold bg-opacity-20 rounded-md h-6 leading-4 py-1 px-2");
      attr(div, "class", div_class_value = "w-full absolute " + /*scrolled80pt*/
      (ctx[11] ? "-top-12" : "top-3") + " flex items-center justify-center transition-all duration-300");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, span2);
      append_hydration(span2, span0);
      append_hydration(span0, t0);
      append_hydration(span2, span1);
      append_hydration(span1, t1);
      append_hydration(span2, t2);
      append_hydration(span2, t3);
      if (!mounted) {
        dispose = listen(
          span2,
          "click",
          /*click_handler*/
          ctx[19]
        );
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty[0] & /*gamePaused*/
      16 && t3_value !== (t3_value = /*gamePaused*/
      ctx2[4] ? "resume" : "pause"))
        set_data(t3, t3_value);
      if (dirty[0] & /*scrolled80pt*/
      2048 && div_class_value !== (div_class_value = "w-full absolute " + /*scrolled80pt*/
      (ctx2[11] ? "-top-12" : "top-3") + " flex items-center justify-center transition-all duration-300")) {
        attr(div, "class", div_class_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block_6(ctx) {
  let div;
  let span2;
  let span0;
  let t0;
  let t1;
  let span1;
  let t2;
  let div_class_value;
  let mounted;
  let dispose;
  return {
    c() {
      div = element("div");
      span2 = element("span");
      span0 = element("span");
      t0 = text("click here to start the game");
      t1 = space();
      span1 = element("span");
      t2 = text("press any arrow key to start the game");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      span2 = claim_element(div_nodes, "SPAN", { class: true });
      var span2_nodes = children(span2);
      span0 = claim_element(span2_nodes, "SPAN", { class: true });
      var span0_nodes = children(span0);
      t0 = claim_text(span0_nodes, "click here to start the game");
      span0_nodes.forEach(detach);
      t1 = claim_space(span2_nodes);
      span1 = claim_element(span2_nodes, "SPAN", { class: true });
      var span1_nodes = children(span1);
      t2 = claim_text(span1_nodes, "press any arrow key to start the game");
      span1_nodes.forEach(detach);
      span2_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span0, "class", "inline lg:hidden");
      attr(span1, "class", "hidden lg:inline");
      attr(span2, "class", "bg-black text-xs font-semibold bg-opacity-20 rounded-md h-6 leading-4 py-1 px-2");
      attr(div, "class", div_class_value = "w-full absolute " + /*scrolled80pt*/
      (ctx[11] ? "-top-12" : "top-3") + " flex items-center justify-center transition-all duration-300");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, span2);
      append_hydration(span2, span0);
      append_hydration(span0, t0);
      append_hydration(span2, t1);
      append_hydration(span2, span1);
      append_hydration(span1, t2);
      if (!mounted) {
        dispose = listen(
          span2,
          "click",
          /*click_handler_1*/
          ctx[20]
        );
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty[0] & /*scrolled80pt*/
      2048 && div_class_value !== (div_class_value = "w-full absolute " + /*scrolled80pt*/
      (ctx2[11] ? "-top-12" : "top-3") + " flex items-center justify-center transition-all duration-300")) {
        attr(div, "class", div_class_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block_3(ctx) {
  let t0;
  let p;
  let t1;
  let p_intro;
  let t2;
  let if_block1_anchor;
  let if_block0 = (
    /*totalScore*/
    ctx[7] > /*score*/
    ctx[5] && create_if_block_5(ctx)
  );
  let if_block1 = (
    /*maxScore*/
    (ctx[6] != /*totalScore*/
    ctx[7] || /*maxScore*/
    ctx[6] != /*score*/
    ctx[5]) && create_if_block_4(ctx)
  );
  return {
    c() {
      if (if_block0)
        if_block0.c();
      t0 = space();
      p = element("p");
      t1 = text(
        /*score*/
        ctx[5]
      );
      t2 = space();
      if (if_block1)
        if_block1.c();
      if_block1_anchor = empty();
      this.h();
    },
    l(nodes) {
      if (if_block0)
        if_block0.l(nodes);
      t0 = claim_space(nodes);
      p = claim_element(nodes, "P", { class: true });
      var p_nodes = children(p);
      t1 = claim_text(
        p_nodes,
        /*score*/
        ctx[5]
      );
      p_nodes.forEach(detach);
      t2 = claim_space(nodes);
      if (if_block1)
        if_block1.l(nodes);
      if_block1_anchor = empty();
      this.h();
    },
    h() {
      attr(p, "class", "text-xl md:text-2xl lg:text-3xl xl:text-5xl text-white font-extrabold");
    },
    m(target, anchor) {
      if (if_block0)
        if_block0.m(target, anchor);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, p, anchor);
      append_hydration(p, t1);
      insert_hydration(target, t2, anchor);
      if (if_block1)
        if_block1.m(target, anchor);
      insert_hydration(target, if_block1_anchor, anchor);
    },
    p(ctx2, dirty) {
      if (
        /*totalScore*/
        ctx2[7] > /*score*/
        ctx2[5]
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_5(ctx2);
          if_block0.c();
          if_block0.m(t0.parentNode, t0);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (dirty[0] & /*score*/
      32)
        set_data(
          t1,
          /*score*/
          ctx2[5]
        );
      if (
        /*maxScore*/
        ctx2[6] != /*totalScore*/
        ctx2[7] || /*maxScore*/
        ctx2[6] != /*score*/
        ctx2[5]
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block_4(ctx2);
          if_block1.c();
          if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
    },
    i(local) {
      if (!p_intro) {
        add_render_callback(() => {
          p_intro = create_in_transition(p, fade, {});
          p_intro.start();
        });
      }
    },
    o: noop,
    d(detaching) {
      if (if_block0)
        if_block0.d(detaching);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(p);
      if (detaching)
        detach(t2);
      if (if_block1)
        if_block1.d(detaching);
      if (detaching)
        detach(if_block1_anchor);
    }
  };
}
function create_if_block_5(ctx) {
  let p;
  let t;
  return {
    c() {
      p = element("p");
      t = text(
        /*totalScore*/
        ctx[7]
      );
      this.h();
    },
    l(nodes) {
      p = claim_element(nodes, "P", { class: true });
      var p_nodes = children(p);
      t = claim_text(
        p_nodes,
        /*totalScore*/
        ctx[7]
      );
      p_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(p, "class", "text-md sm:text-lg md:text-xl lg:text-2xl text-white font-extrabold");
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
      append_hydration(p, t);
    },
    p(ctx2, dirty) {
      if (dirty[0] & /*totalScore*/
      128)
        set_data(
          t,
          /*totalScore*/
          ctx2[7]
        );
    },
    d(detaching) {
      if (detaching)
        detach(p);
    }
  };
}
function create_if_block_4(ctx) {
  let p;
  let t;
  return {
    c() {
      p = element("p");
      t = text(
        /*maxScore*/
        ctx[6]
      );
      this.h();
    },
    l(nodes) {
      p = claim_element(nodes, "P", { class: true });
      var p_nodes = children(p);
      t = claim_text(
        p_nodes,
        /*maxScore*/
        ctx[6]
      );
      p_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(p, "class", "text-md sm:text-lg md:text-xl lg:text-2xl text-white font-extrabold");
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
      append_hydration(p, t);
    },
    p(ctx2, dirty) {
      if (dirty[0] & /*maxScore*/
      64)
        set_data(
          t,
          /*maxScore*/
          ctx2[6]
        );
    },
    d(detaching) {
      if (detaching)
        detach(p);
    }
  };
}
function create_if_block_2(ctx) {
  let div14;
  let div13;
  let div0;
  let t0;
  let div2;
  let div1;
  let t1;
  let div3;
  let t2;
  let div5;
  let div4;
  let t3;
  let div6;
  let t4;
  let div8;
  let div7;
  let t5;
  let div9;
  let t6;
  let div11;
  let div10;
  let t7;
  let div12;
  let mounted;
  let dispose;
  return {
    c() {
      div14 = element("div");
      div13 = element("div");
      div0 = element("div");
      t0 = space();
      div2 = element("div");
      div1 = element("div");
      t1 = space();
      div3 = element("div");
      t2 = space();
      div5 = element("div");
      div4 = element("div");
      t3 = space();
      div6 = element("div");
      t4 = space();
      div8 = element("div");
      div7 = element("div");
      t5 = space();
      div9 = element("div");
      t6 = space();
      div11 = element("div");
      div10 = element("div");
      t7 = space();
      div12 = element("div");
      this.h();
    },
    l(nodes) {
      div14 = claim_element(nodes, "DIV", { id: true, class: true });
      var div14_nodes = children(div14);
      div13 = claim_element(div14_nodes, "DIV", { class: true });
      var div13_nodes = children(div13);
      div0 = claim_element(div13_nodes, "DIV", { class: true });
      children(div0).forEach(detach);
      t0 = claim_space(div13_nodes);
      div2 = claim_element(div13_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div1 = claim_element(div2_nodes, "DIV", { class: true, style: true });
      children(div1).forEach(detach);
      div2_nodes.forEach(detach);
      t1 = claim_space(div13_nodes);
      div3 = claim_element(div13_nodes, "DIV", { class: true });
      children(div3).forEach(detach);
      t2 = claim_space(div13_nodes);
      div5 = claim_element(div13_nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      div4 = claim_element(div5_nodes, "DIV", { class: true, style: true });
      children(div4).forEach(detach);
      div5_nodes.forEach(detach);
      t3 = claim_space(div13_nodes);
      div6 = claim_element(div13_nodes, "DIV", { class: true });
      children(div6).forEach(detach);
      t4 = claim_space(div13_nodes);
      div8 = claim_element(div13_nodes, "DIV", { class: true });
      var div8_nodes = children(div8);
      div7 = claim_element(div8_nodes, "DIV", { class: true, style: true });
      children(div7).forEach(detach);
      div8_nodes.forEach(detach);
      t5 = claim_space(div13_nodes);
      div9 = claim_element(div13_nodes, "DIV", { class: true });
      children(div9).forEach(detach);
      t6 = claim_space(div13_nodes);
      div11 = claim_element(div13_nodes, "DIV", { class: true });
      var div11_nodes = children(div11);
      div10 = claim_element(div11_nodes, "DIV", { class: true, style: true });
      children(div10).forEach(detach);
      div11_nodes.forEach(detach);
      t7 = claim_space(div13_nodes);
      div12 = claim_element(div13_nodes, "DIV", { class: true });
      children(div12).forEach(detach);
      div13_nodes.forEach(detach);
      div14_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "w-full bg-transparent rounded-md");
      attr(div1, "class", "w-12 h-12 bg-white bg-opacity-50 rounded-md border-4");
      set_style(div1, "border-color", "rgba(255,255,255,0.7)");
      attr(div2, "class", "w-full flex items-center jusitfy-center");
      attr(div3, "class", "w-full aspect-square bg-transparent rounded-md");
      attr(div4, "class", "w-12 h-12 bg-white bg-opacity-50 rounded-md border-4");
      set_style(div4, "border-color", "rgba(255,255,255,0.7)");
      attr(div5, "class", "w-full flex items-center jusitfy-center");
      attr(div6, "class", "w-full aspect-square bg-transparent rounded-md");
      attr(div7, "class", "w-12 h-12 bg-white bg-opacity-50 rounded-md border-4");
      set_style(div7, "border-color", "rgba(255,255,255,0.7)");
      attr(div8, "class", "w-full flex items-center jusitfy-center");
      attr(div9, "class", "w-full aspect-square bg-transparent rounded-md");
      attr(div10, "class", "w-12 h-12 bg-white bg-opacity-50 rounded-md border-4");
      set_style(div10, "border-color", "rgba(255,255,255,0.7)");
      attr(div11, "class", "w-full flex items-center jusitfy-center");
      attr(div12, "class", "w-full h-full bg-transparent rounded-md");
      attr(div13, "class", "w-1/2 h-auto grid grid-cols-3 gap-2");
      attr(div14, "id", "overlay2");
      attr(div14, "class", "w-screen h-screen bg-transparent absolute top-0 left-0 flex items-end justify-center p-8 md:hidden z-50");
    },
    m(target, anchor) {
      insert_hydration(target, div14, anchor);
      append_hydration(div14, div13);
      append_hydration(div13, div0);
      append_hydration(div13, t0);
      append_hydration(div13, div2);
      append_hydration(div2, div1);
      append_hydration(div13, t1);
      append_hydration(div13, div3);
      append_hydration(div13, t2);
      append_hydration(div13, div5);
      append_hydration(div5, div4);
      append_hydration(div13, t3);
      append_hydration(div13, div6);
      append_hydration(div13, t4);
      append_hydration(div13, div8);
      append_hydration(div8, div7);
      append_hydration(div13, t5);
      append_hydration(div13, div9);
      append_hydration(div13, t6);
      append_hydration(div13, div11);
      append_hydration(div11, div10);
      append_hydration(div13, t7);
      append_hydration(div13, div12);
      if (!mounted) {
        dispose = [
          listen(
            div1,
            "click",
            /*click_handler_2*/
            ctx[21]
          ),
          listen(
            div4,
            "click",
            /*click_handler_3*/
            ctx[22]
          ),
          listen(
            div7,
            "click",
            /*click_handler_4*/
            ctx[23]
          ),
          listen(
            div10,
            "click",
            /*click_handler_5*/
            ctx[24]
          )
        ];
        mounted = true;
      }
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(div14);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block(ctx) {
  let div2;
  let div0;
  let t0;
  let span;
  let t1;
  let t2;
  let div1;
  let div2_intro;
  let div2_outro;
  let current;
  let mounted;
  let dispose;
  let if_block = (
    /*mounted*/
    ctx[8] && create_if_block_1(ctx)
  );
  return {
    c() {
      div2 = element("div");
      div0 = element("div");
      t0 = text("cv\n        ");
      span = element("span");
      t1 = text("& snake");
      t2 = space();
      div1 = element("div");
      if (if_block)
        if_block.c();
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { id: true, style: true, class: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t0 = claim_text(div0_nodes, "cv\n        ");
      span = claim_element(div0_nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t1 = claim_text(span_nodes, "& snake");
      span_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      t2 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      if (if_block)
        if_block.l(div1_nodes);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "text-lg");
      attr(div0, "class", "absolute top-0 h-96 left-0 pointer-events-none text-6xl font-extrabold flex items-center justify-center w-full text-white flex-col");
      attr(div1, "class", "w-full h-full overflow-y-scroll grid justify-center pt-96 pb-32 lg:py-96");
      attr(div2, "id", "overlay3");
      set_style(div2, "background-color", "rgba(0,0,0, " + (0.3 + /*extraDarkness*/
      ctx[10]) + ")");
      attr(div2, "class", "w-full h-full transition-all duration-300 absolute top-0 left-0 flex items-end justify-center z-40");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div0);
      append_hydration(div0, t0);
      append_hydration(div0, span);
      append_hydration(span, t1);
      append_hydration(div2, t2);
      append_hydration(div2, div1);
      if (if_block)
        if_block.m(div1, null);
      ctx[27](div1);
      current = true;
      if (!mounted) {
        dispose = [
          listen(
            div1,
            "wheel",
            /*wheel_handler*/
            ctx[28],
            { passive: true }
          ),
          listen(
            div1,
            "touchmove",
            /*touchmove_handler*/
            ctx[29],
            { passive: true }
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (
        /*mounted*/
        ctx2[8]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty[0] & /*mounted*/
          256) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_1(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div1, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      if (!current || dirty[0] & /*extraDarkness*/
      1024) {
        set_style(div2, "background-color", "rgba(0,0,0, " + (0.3 + /*extraDarkness*/
        ctx2[10]) + ")");
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      add_render_callback(() => {
        if (div2_outro)
          div2_outro.end(1);
        div2_intro = create_in_transition(div2, fade, {});
        div2_intro.start();
      });
      current = true;
    },
    o(local) {
      transition_out(if_block);
      if (div2_intro)
        div2_intro.invalidate();
      div2_outro = create_out_transition(div2, fade, {});
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div2);
      if (if_block)
        if_block.d();
      ctx[27](null);
      if (detaching && div2_outro)
        div2_outro.end();
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block_1(ctx) {
  let div1;
  let div0;
  let svg;
  let path;
  let t;
  let cv;
  let div1_intro;
  let current;
  let mounted;
  let dispose;
  cv = new CV({});
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      svg = svg_element("svg");
      path = svg_element("path");
      t = space();
      create_component(cv.$$.fragment);
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      svg = claim_svg_element(div0_nodes, "svg", {
        class: true,
        xmlns: true,
        fill: true,
        viewBox: true
      });
      var svg_nodes = children(svg);
      path = claim_svg_element(svg_nodes, "path", { d: true });
      children(path).forEach(detach);
      svg_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      t = claim_space(div1_nodes);
      claim_component(cv.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(path, "d", "M220,152v56a12,12,0,0,1-12,12H48a12,12,0,0,1-12-12V152a4,4,0,0,1,8,0v56a4,4,0,0,0,4,4H208a4,4,0,0,0,4-4V152a4,4,0,0,1,8,0Zm-94.83,2.83a4,4,0,0,0,5.66,0l40-40a4,4,0,1,0-5.66-5.66L132,142.34V40a4,4,0,0,0-8,0V142.34L90.83,109.17a4,4,0,0,0-5.66,5.66Z");
      attr(svg, "class", "w-5 h-5");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg, "fill", "#000000");
      attr(svg, "viewBox", "0 0 256 256");
      attr(div0, "class", "hidden shadow-sm absolute -top-3 -right-3 cursor-pointer bg-white hover:bg-gray-200 transition-all duration-300 border-gray-200 border-2 rounded-md p-1 z-50 flex-row gap-x-2");
      attr(div1, "class", "relative bg-white shadow-xl rounded-md hover:shadow-2xl transition-all duration-200 flex flex-col h-full");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      append_hydration(div0, svg);
      append_hydration(svg, path);
      append_hydration(div1, t);
      mount_component(cv, div1, null);
      current = true;
      if (!mounted) {
        dispose = [
          listen(
            div1,
            "mouseenter",
            /*mouseenter_handler*/
            ctx[25]
          ),
          listen(
            div1,
            "mouseleave",
            /*mouseleave_handler*/
            ctx[26]
          )
        ];
        mounted = true;
      }
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(cv.$$.fragment, local);
      if (!div1_intro) {
        add_render_callback(() => {
          div1_intro = create_in_transition(div1, scale, { delay: 0, duration: 500 });
          div1_intro.start();
        });
      }
      current = true;
    },
    o(local) {
      transition_out(cv.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      destroy_component(cv);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_fragment(ctx) {
  let div3;
  let div0;
  let each_blocks = [];
  let each_1_lookup = /* @__PURE__ */ new Map();
  let t0;
  let div1;
  let t1;
  let t2;
  let div2;
  let t3;
  let t4;
  let current;
  let mounted;
  let dispose;
  let each_value = [...Array(
    /*rows*/
    ctx[12]
  ).keys()];
  const get_key = (ctx2) => (
    /*row*/
    ctx2[44]
  );
  for (let i = 0; i < each_value.length; i += 1) {
    let child_ctx = get_each_context(ctx, each_value, i);
    let key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
  }
  let if_block0 = (
    /*inputDirection*/
    ctx[3] && create_if_block_7(ctx)
  );
  let if_block1 = !/*inputDirection*/
  ctx[3] && /*gamePaused*/
  ctx[4] && create_if_block_6(ctx);
  let if_block2 = !/*gamePaused*/
  ctx[4] && create_if_block_3(ctx);
  let if_block3 = !/*gamePaused*/
  ctx[4] && create_if_block_2(ctx);
  let if_block4 = (
    /*gamePaused*/
    ctx[4] && create_if_block(ctx)
  );
  return {
    c() {
      div3 = element("div");
      div0 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t0 = space();
      div1 = element("div");
      if (if_block0)
        if_block0.c();
      t1 = space();
      if (if_block1)
        if_block1.c();
      t2 = space();
      div2 = element("div");
      if (if_block2)
        if_block2.c();
      t3 = space();
      if (if_block3)
        if_block3.c();
      t4 = space();
      if (if_block4)
        if_block4.c();
      this.h();
    },
    l(nodes) {
      div3 = claim_element(nodes, "DIV", { id: true, class: true });
      var div3_nodes = children(div3);
      div0 = claim_element(div3_nodes, "DIV", { class: true, style: true });
      var div0_nodes = children(div0);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div0_nodes);
      }
      div0_nodes.forEach(detach);
      t0 = claim_space(div3_nodes);
      div1 = claim_element(div3_nodes, "DIV", { id: true, style: true, class: true });
      var div1_nodes = children(div1);
      if (if_block0)
        if_block0.l(div1_nodes);
      t1 = claim_space(div1_nodes);
      if (if_block1)
        if_block1.l(div1_nodes);
      div1_nodes.forEach(detach);
      t2 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", { id: true, class: true });
      var div2_nodes = children(div2);
      if (if_block2)
        if_block2.l(div2_nodes);
      div2_nodes.forEach(detach);
      t3 = claim_space(div3_nodes);
      if (if_block3)
        if_block3.l(div3_nodes);
      t4 = claim_space(div3_nodes);
      if (if_block4)
        if_block4.l(div3_nodes);
      div3_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "grid w-full h-full");
      set_style(div0, "grid-template-columns", "repeat(" + /*cols*/
      ctx[0] + ", minmax(0, 1fr))");
      attr(div1, "id", "overlay4");
      set_style(div1, "z-index", "300");
      attr(div1, "class", "w-screen h-16 bg-transparent absolute top-0 left-0 flex items-center justify-center flex-col gap-y-2");
      attr(div2, "id", "overlay8");
      attr(div2, "class", "z-40 w-screen h-screen bg-transparent pointer-events-none absolute top-0 left-0 flex items-center justify-center flex-col gap-y-2");
      attr(div3, "id", "bg");
      attr(div3, "class", "w-screen h-screen overflow-hidden text-white transition-all items-center justify-center flex svelte-1bz1tbw");
    },
    m(target, anchor) {
      insert_hydration(target, div3, anchor);
      append_hydration(div3, div0);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div0, null);
      }
      append_hydration(div3, t0);
      append_hydration(div3, div1);
      if (if_block0)
        if_block0.m(div1, null);
      append_hydration(div1, t1);
      if (if_block1)
        if_block1.m(div1, null);
      append_hydration(div3, t2);
      append_hydration(div3, div2);
      if (if_block2)
        if_block2.m(div2, null);
      append_hydration(div3, t3);
      if (if_block3)
        if_block3.m(div3, null);
      append_hydration(div3, t4);
      if (if_block4)
        if_block4.m(div3, null);
      current = true;
      if (!mounted) {
        dispose = listen(
          div3,
          "mousemove",
          /*mousemove_handler*/
          ctx[30]
        );
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty[0] & /*cols, rows, food, $snake*/
      12291) {
        each_value = [...Array(
          /*rows*/
          ctx2[12]
        ).keys()];
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value, each_1_lookup, div0, destroy_block, create_each_block, null, get_each_context);
      }
      if (!current || dirty[0] & /*cols*/
      1) {
        set_style(div0, "grid-template-columns", "repeat(" + /*cols*/
        ctx2[0] + ", minmax(0, 1fr))");
      }
      if (
        /*inputDirection*/
        ctx2[3]
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_7(ctx2);
          if_block0.c();
          if_block0.m(div1, t1);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (!/*inputDirection*/
      ctx2[3] && /*gamePaused*/
      ctx2[4]) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block_6(ctx2);
          if_block1.c();
          if_block1.m(div1, null);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
      if (!/*gamePaused*/
      ctx2[4]) {
        if (if_block2) {
          if_block2.p(ctx2, dirty);
          if (dirty[0] & /*gamePaused*/
          16) {
            transition_in(if_block2, 1);
          }
        } else {
          if_block2 = create_if_block_3(ctx2);
          if_block2.c();
          transition_in(if_block2, 1);
          if_block2.m(div2, null);
        }
      } else if (if_block2) {
        if_block2.d(1);
        if_block2 = null;
      }
      if (!/*gamePaused*/
      ctx2[4]) {
        if (if_block3) {
          if_block3.p(ctx2, dirty);
        } else {
          if_block3 = create_if_block_2(ctx2);
          if_block3.c();
          if_block3.m(div3, t4);
        }
      } else if (if_block3) {
        if_block3.d(1);
        if_block3 = null;
      }
      if (
        /*gamePaused*/
        ctx2[4]
      ) {
        if (if_block4) {
          if_block4.p(ctx2, dirty);
          if (dirty[0] & /*gamePaused*/
          16) {
            transition_in(if_block4, 1);
          }
        } else {
          if_block4 = create_if_block(ctx2);
          if_block4.c();
          transition_in(if_block4, 1);
          if_block4.m(div3, null);
        }
      } else if (if_block4) {
        group_outros();
        transition_out(if_block4, 1, 1, () => {
          if_block4 = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block2);
      transition_in(if_block4);
      current = true;
    },
    o(local) {
      transition_out(if_block4);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div3);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].d();
      }
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
      if (if_block2)
        if_block2.d();
      if (if_block3)
        if_block3.d();
      if (if_block4)
        if_block4.d();
      mounted = false;
      dispose();
    }
  };
}
let mouseDistance = 60;
let scrolled = 0;
function getRandomInt(low, high) {
  return Math.floor(Math.random() * (high - low + 1)) + low;
}
function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
  };
}
function instance($$self, $$props, $$invalidate) {
  let rows;
  let topSpace;
  let $snake;
  let cols = 32;
  let speed = 0;
  let aspect_ratio = 0;
  let food = [-1, -1];
  let snake = writable([]);
  component_subscribe($$self, snake, (value) => $$invalidate(13, $snake = value));
  let mousePos = [200, 200];
  let inputDirection = false;
  let gamePaused = true;
  let cooldown = false;
  let score = 0;
  let maxScore = 0;
  let totalScore = 3;
  let mounted = false;
  let scrollContainer;
  let extraDarkness = 0;
  let scrolled80pt = false;
  function getNewHeadPosition(direction) {
    return normalizeCoords([
      $snake.slice(-1)[0][0] + (direction == "right" ? 1 : direction == "left" ? -1 : 0),
      $snake.slice(-1)[0][1] + (direction == "down" ? 1 : direction == "up" ? -1 : 0)
    ]);
  }
  function getRandomCoords() {
    let coords = [getRandomInt(0, cols - 1), getRandomInt(0, rows - 1)];
    return coords;
  }
  function occupiedBySnake(coords) {
    return $snake.some((part) => part[0] == coords[0] && part[1] == coords[1]);
  }
  function getRandomUnoccupiedCoords() {
    let coords = getRandomCoords();
    while ($snake.some((part) => part[0] == coords[0] && part[1] == coords[1])) {
      coords = getRandomCoords();
    }
    return coords;
  }
  function normalizeCoords(coords) {
    return [(coords[0] + cols) % cols, (coords[1] + rows) % rows];
  }
  function spawnFood() {
    $$invalidate(1, food = getRandomUnoccupiedCoords());
  }
  function spawnSnake() {
    let a = getRandomUnoccupiedCoords();
    let b = normalizeCoords([a[0] + 1, a[1]]);
    let c = normalizeCoords([a[0] + 2, a[1]]);
    snake.set([a, b, c]);
  }
  let illegalDirection = false;
  function moveSnake() {
    let directionAngles = [0, 90, 180, 270];
    let directions = ["right", "down", "left", "up"];
    if (illegalDirection) {
      let index = directions.indexOf(illegalDirection);
      if (index > -1) {
        directions.splice(index, 1);
        directionAngles.splice(index, 1);
      }
    }
    let headPosition = $snake.slice(-1)[0];
    let headElement = document.getElementById("tile-" + headPosition[0] + "-" + headPosition[1]);
    let headCoordinates = getOffset(headElement);
    let headCenter = [
      headCoordinates.left + headElement.offsetWidth / 2,
      headCoordinates.top + headElement.offsetHeight / 2
    ];
    let distance = Math.sqrt(Math.pow(mousePos[0] - headCenter[0], 2) + Math.pow(mousePos[1] - headCenter[1], 2));
    let direction;
    let newHead;
    if (inputDirection) {
      newHead = getNewHeadPosition(inputDirection);
      direction = inputDirection;
      if (occupiedBySnake(newHead)) {
        let bittenPart = $snake.findIndex((part) => part[0] == newHead[0] && part[1] == newHead[1]);
        snake.update(($snake2) => {
          return $snake2.slice(bittenPart, $snake2.length);
        });
      }
    } else {
      if (distance < mouseDistance) {
        direction = directions[getRandomInt(0, directions.length - 1)];
      } else {
        let closest = function(arr, goal) {
          return arr.reduce(function(prev, curr) {
            return Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev;
          });
        };
        let angleDeg = Math.atan2(mousePos[1] - headCenter[1], mousePos[0] - headCenter[0]) * 180 / Math.PI;
        if (angleDeg < 0) {
          angleDeg = 360 + angleDeg;
        }
        direction = directions[directionAngles.indexOf(closest(directionAngles, angleDeg))];
      }
      let originalDirection = structuredClone(direction);
      newHead = getNewHeadPosition(direction);
      while (occupiedBySnake(newHead)) {
        if (directions.length == 0) {
          newHead = getNewHeadPosition(originalDirection);
          let bittenPart = $snake.findIndex((part) => part[0] == newHead[0] && part[1] == newHead[1]);
          snake.update(($snake2) => {
            return $snake2.slice(bittenPart, $snake2.length);
          });
          break;
        }
        direction = directions[getRandomInt(0, directions.length - 1)];
        directions = directions.filter((dir) => dir != direction);
        newHead = getNewHeadPosition(direction);
      }
    }
    illegalDirection = direction == "right" ? "left" : direction == "left" ? "right" : direction == "up" ? "down" : "up";
    snake.update(($snake2) => {
      let old_snake = $snake2.slice(1);
      if (newHead[0] == food[0] && newHead[1] == food[1]) {
        old_snake = $snake2;
        spawnFood();
        $$invalidate(7, totalScore += 1);
      }
      return [...old_snake, newHead];
    });
  }
  let gameTimeout;
  function nextStep() {
    gameTimeout = setTimeout(
      () => {
        moveSnake();
        cooldown = false;
        if (gamePaused && inputDirection) {
          return;
        }
        nextStep();
      },
      1e3 / (5.8 + speed)
    );
  }
  onMount(() => {
    $$invalidate(16, aspect_ratio = window.screen.height / window.screen.width);
    if (aspect_ratio > 0.8) {
      $$invalidate(0, cols = 16);
    }
    if (aspect_ratio > 1.5) {
      $$invalidate(0, cols = 8);
    }
    document.onkeydown = checkKey;
    $$invalidate(8, mounted = true);
    setTimeout(
      () => {
        spawnSnake();
      },
      200
    );
    setTimeout(
      () => {
        nextStep();
      },
      300
    );
  });
  snake.subscribe((snake_) => {
    $$invalidate(5, score = snake_.length);
    if (score > maxScore) {
      $$invalidate(6, maxScore = score);
    }
    speed = score / 4;
  });
  function checkKey(e) {
    if (![37, 38, 39, 40, 32].includes(e.keyCode))
      return;
    if (e.preventDefault)
      e.preventDefault();
    if (e.keyCode == "38" || e.keyCode == "40" || e.keyCode == "37" || e.keyCode == "39") {
      if (!inputDirection) {
        $$invalidate(4, gamePaused = false);
        spawnFood();
      }
    }
    if (e.keyCode == "32") {
      if (!gamePaused) {
        clearTimeout(gameTimeout);
        gameTimeout = false;
        $$invalidate(4, gamePaused = true);
      } else {
        if (inputDirection) {
          nextStep();
          $$invalidate(4, gamePaused = false);
        }
      }
      return;
    }
    if (cooldown) {
      return;
    }
    let newDirection = false;
    if (e.keyCode == "38") {
      newDirection = "up";
    } else if (e.keyCode == "40") {
      newDirection = "down";
    } else if (e.keyCode == "37") {
      newDirection = "left";
    } else if (e.keyCode == "39") {
      newDirection = "right";
    }
    if (newDirection === illegalDirection) {
      newDirection = newDirection == "right" ? "left" : newDirection == "left" ? "right" : newDirection == "up" ? "down" : "up";
    }
    $$invalidate(3, inputDirection = newDirection);
    cooldown = true;
  }
  const func = (col, row, part) => part[0] == col && part[1] == row;
  const click_handler = () => {
    checkKey({ keyCode: 32 });
  };
  const click_handler_1 = () => {
    checkKey({ keyCode: 37 });
  };
  const click_handler_2 = () => checkKey({ keyCode: 38 });
  const click_handler_3 = () => checkKey({ keyCode: 37 });
  const click_handler_4 = () => checkKey({ keyCode: 39 });
  const click_handler_5 = () => checkKey({ keyCode: 40 });
  const mouseenter_handler = () => {
    $$invalidate(10, extraDarkness = 0.4);
  };
  const mouseleave_handler = () => {
    $$invalidate(10, extraDarkness = 0);
  };
  function div1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      scrollContainer = $$value;
      $$invalidate(9, scrollContainer);
    });
  }
  const wheel_handler = () => {
    setTimeout(
      () => {
        $$invalidate(11, scrolled80pt = scrollContainer.scrollTop > 280);
        setTimeout(
          () => {
            $$invalidate(11, scrolled80pt = scrollContainer.scrollTop > 280);
            setTimeout(
              () => {
                $$invalidate(11, scrolled80pt = scrollContainer.scrollTop > 280);
              },
              300
            );
          },
          300
        );
      },
      300
    );
    $$invalidate(11, scrolled80pt = scrollContainer.scrollTop > 280);
  };
  const touchmove_handler = () => {
    setTimeout(
      () => {
        $$invalidate(11, scrolled80pt = scrollContainer.scrollTop > 280);
        setTimeout(
          () => {
            $$invalidate(11, scrolled80pt = scrollContainer.scrollTop > 280);
            setTimeout(
              () => {
                $$invalidate(11, scrolled80pt = scrollContainer.scrollTop > 280);
              },
              300
            );
          },
          300
        );
      },
      300
    );
    $$invalidate(11, scrolled80pt = scrollContainer.scrollTop > 280);
  };
  const mousemove_handler = (e) => {
    $$invalidate(2, mousePos = [e.clientX, e.clientY]);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty[0] & /*cols, aspect_ratio*/
    65537) {
      $$invalidate(12, rows = Math.floor(cols * aspect_ratio));
    }
    if ($$self.$$.dirty[0] & /*topSpace*/
    131072) {
      console.log(scrolled);
    }
  };
  $$invalidate(
    17,
    topSpace = "96"
  );
  return [
    cols,
    food,
    mousePos,
    inputDirection,
    gamePaused,
    score,
    maxScore,
    totalScore,
    mounted,
    scrollContainer,
    extraDarkness,
    scrolled80pt,
    rows,
    $snake,
    snake,
    checkKey,
    aspect_ratio,
    topSpace,
    func,
    click_handler,
    click_handler_1,
    click_handler_2,
    click_handler_3,
    click_handler_4,
    click_handler_5,
    mouseenter_handler,
    mouseleave_handler,
    div1_binding,
    wheel_handler,
    touchmove_handler,
    mousemove_handler
  ];
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {}, null, [-1, -1]);
  }
}
export {
  Page as default
};
