const schema = {
    title: "item to buy",
    type: "object",
    properties: {
      item: {
        type: "string",
        description: "something user wants to buy",
      },
      bought: {
        type: "boolean",
        description: "shows if item is bought",
      },
    },
    required: ["item", "bought"],
  };
  
  const state = {
    items: [

    ],
    };
  export { state };
