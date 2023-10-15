import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, y as create_component, l as claim_element, m as children, z as claim_component, h as detach, n as attr, b as insert_hydration, I as append_hydration, A as mount_component, G as noop, g as transition_in, d as transition_out, B as destroy_component } from "../chunks/index.0616d844.js";
import { C as CV } from "../chunks/CV.6fcf28b1.js";
function create_fragment(ctx) {
  let div2;
  let div1;
  let div0;
  let cv;
  let current;
  cv = new CV({});
  return {
    c() {
      div2 = element("div");
      div1 = element("div");
      div0 = element("div");
      create_component(cv.$$.fragment);
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      claim_component(cv.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "w-auto");
      attr(div1, "class", "absolute top-0 left-0 flex w-full items-center justify-center");
      attr(div2, "class", "w-full h-screen bg-white flex overflow-y-scroll items-center relative");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div1);
      append_hydration(div1, div0);
      mount_component(cv, div0, null);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(cv.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(cv.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div2);
      destroy_component(cv);
    }
  };
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as default
};
