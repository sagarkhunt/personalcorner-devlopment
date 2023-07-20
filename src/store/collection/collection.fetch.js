import { toast } from "react-toastify";
import AxiosRequest from "../../AxiosRequest";
import { collectionSetState } from "./collection.slice";

export const collectionFetch = async (value, setSubmitting) => {
  try {
    const { data } = await AxiosRequest.post(
      "/admin/collection/create-collection",
      value
    );
    toast.success(data.message);
    setSubmitting(false);
  } catch (error) {
    toast.error(error.response.data.message);
    setSubmitting(false);
  }
};

export const deleteCollection =
  (collection_id, records) => async (dispatch) => {
    try {
      const { data } = await AxiosRequest.get(
        `/admin/collection/delete?collection_id=${collection_id}`
      );
      const filterdCollections = records.filter(
        (item) => item._id !== collection_id
      );

      console.log("filtered collection", filterdCollections);

      dispatch(
        collectionSetState([
          { key: "collections.records", value: filterdCollections },
        ])
      );

      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

export const deleteCollectionByIds = (collection_ids) => async (dispatch) => {
  try {
    console.log("collection_ids", collection_ids);
    await AxiosRequest.post("/admin/collection/deleteById", {
      collection_ids: collection_ids,
    });
    dispatch(
      collectionSetState([{ key: "collections.isLoading", value: true }])
    );
    dispatch(
      getCollection({ limit: 5, page: 1, search: "", sortBy: "name", sort: -1 })
    );
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const fetchMarketplaceCollections =
  (params) => async (dispatch, getState) => {
    try {
      const collections = getState().collection.newCollections;
      let _collections = [...collections.records];
      if (params.page === 1) {
        _collections = [];
      }
      dispatch(
        collectionSetState([{ key: "newCollections.loading", value: true }])
      );

      const { data } = await AxiosRequest.get("/collections", { params });
      _collections.push(...data.data.records);
      dispatch(
        collectionSetState([
          { key: "newCollections.loading", value: false },
          { key: "newCollections.current", value: data.data.current },
          { key: "newCollections.from", value: data.data.from },
          { key: "newCollections.pages", value: data.data.pages },
          { key: "newCollections.records", value: _collections },
          { key: "newCollections.to", value: data.data.to },
          { key: "newCollections.total", value: data.data.total },
        ])
      );
    } catch (error) {
      dispatch(
        collectionSetState([
          { key: "newCollections.loading", value: false },
          { key: "newCollections.current", value: 0 },
          { key: "newCollections.from", value: 0 },
          { key: "newCollections.pages", value: 0 },
          { key: "newCollections.records", value: [] },
          { key: "newCollections.to", value: 0 },
          { key: "newCollections.total", value: 0 },
        ])
      );
      toast.error(error.response.data.message);
    }
  };

export const fetchAllCollections = () => async (dispatch) => {
  try {
    dispatch(
      collectionSetState([{ key: "allCollections.loading", value: true }])
    );
    const { data } = await AxiosRequest.get("/collections/all");
    dispatch(
      collectionSetState([
        {
          key: "allCollections.records",
          value: data.data.records,
        },
      ])
    );
  } catch (error) {}
};

export const getCollection = (params) => async (dispatch) => {
  try {
    dispatch(
      collectionSetState([{ key: "collections.isLoading", value: true }])
    );
    const { data } = await AxiosRequest.get("admin/collection", { params });

    dispatch(
      collectionSetState([
        { key: "collections.isLoading", value: false },
        { key: "collections.current", value: data.data.current },
        { key: "collections.pages", value: data.data.pages },
        { key: "collections.total", value: data.data.total },
        { key: "collections.records", value: data.data.records },
        { key: "collections.to", value: data.data.to },
        { key: "collections.from", value: data.data.from },
      ])
    );
  } catch (error) {
    toast.error(error.message);
  }
};

export const getCollectionInfo = (id) => async (dispatch) => {
  try {
    dispatch(
      collectionSetState([{ key: "collectionInfo.loading", value: true }])
    );
    const { data } = await AxiosRequest.get(`collections/${id}`);
    dispatch(
      collectionSetState([
        { key: "collectionInfo.loading", value: false },
        { key: "collectionInfo.data", value: data.data },
      ])
    );
  } catch (error) {
    toast.error(error.message);
  }
};

export const getMyCollection = () => async (dispatch) => {
  try {
    dispatch(
      collectionSetState([{ key: "userCollectionLoading", value: true }])
    );
    const { data } = await AxiosRequest.get(`/collections/by_user`);
    dispatch(
      collectionSetState([
        { key: "userCollection", value: data.data },
        { key: "userCollectionLoading", value: false },
      ])
    );
  } catch (error) {
    dispatch(
      collectionSetState([
        { key: "userCollection", value: [] },
        { key: "userCollectionLoading", value: false },
      ])
    );
    toast.error(error.response.data.message);
  }
};

export const blockNft = async (params) => {
  try {
    const { data } = await AxiosRequest.post("collections/blockNft", params);

    return data.data.nft;
  } catch (error) {
    toast.error(error.message);
  }
};

export const checkBlockedNft = async (nftId) => {
  try {
    const { data } = await AxiosRequest.get(
      `collections/${nftId}/checkBlockedNft`
    );
    return data.data;
  } catch (error) {
    toast.error(error.message);
  }
};

export const checkAlreadyPurchase = async (params) => {
  try {
    const { data } = await AxiosRequest.post(
      "/collections/checkAlreadyPurchase",
      params
    );
    return data.data.status;
  } catch (error) {
    toast.error(error.message);
  }
};

export const unBlockedNftById = async (nftId) => {
  try {
    const { data } = await AxiosRequest.get(
      `collections/${nftId}/unblockNftById`
    );
    return data.data;
  } catch (error) {
    toast.error(error.message);
  }
};

export const getTop4Collections = () => async (dispatch) => {
  try {
    dispatch(
      collectionSetState([{ key: "topCollections.loading", value: true }])
    );
    const { data } = await AxiosRequest.get(`collections/top-4-collection`);
    dispatch(
      collectionSetState([
        { key: "topCollections.loading", value: false },
        { key: "topCollections.records", value: data.data },
      ])
    );
  } catch (error) {
    dispatch(
      collectionSetState([
        { key: "topCollections.loading", value: false },
        { key: "topCollections.records", value: [] },
      ])
    );
  }
};

export const getPlayerGear = async (playerId) => {
  try {
    const { data } = await AxiosRequest.get(`collections/${playerId}/gear`);

    return data.data;
  } catch (error) {
    toast.error(error.message);
  }
};
