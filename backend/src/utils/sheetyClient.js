import { sheetyClient } from "../config/sheetyConfig.js";

/**
 * Add a new row to a given Sheety sheet
 * @param {string} sheet - The sheet name (plural, e.g., "serviceRequests")
 * @param {object} payload - The data to store
 * @returns {Promise<object>} - API response
 */
export const addSheetData = async (sheet, payload) => {
  try {
    const res = await sheetyClient.post(`/${sheet}`, {
      [sheet.slice(0, -1)]: payload, // singular key: "serviceRequest"
    });
    return res.data;
  } catch (error) {
    console.error("❌ Error adding data to Sheety:", error.response?.data || error.message);
    throw new Error("Failed to save data to Sheety");
  }
};

/**
 * Retrieve all rows from a Sheety sheet
 * @param {string} sheet - The sheet name (plural)
 * @returns {Promise<Array>} - Array of records
 */
export const getSheetData = async (sheet) => {
  try {
    const res = await sheetyClient.get(`/${sheet}`);
    return res.data[sheet];
  } catch (error) {
    console.error("❌ Error fetching data from Sheety:", error.response?.data || error.message);
    throw new Error("Failed to fetch data from Sheety");
  }
};

/**
 * Update a specific record in a Sheety sheet
 * @param {string} sheet - The sheet name (plural)
 * @param {string|number} id - The row ID in the sheet
 * @param {object} payload - Fields to update
 */
export const updateSheetData = async (sheet, id, payload) => {
  try {
    const res = await sheetyClient.put(`/${sheet}/${id}`, {
      [sheet.slice(0, -1)]: payload,
    });
    return res.data;
  } catch (error) {
    console.error("❌ Error updating Sheety record:", error.response?.data || error.message);
    throw new Error("Failed to update data in Sheety");
  }
};

/**
 * Delete a record by ID
 * @param {string} sheet - The sheet name (plural)
 * @param {string|number} id - The record ID
 */
export const deleteSheetData = async (sheet, id) => {
  try {
    await sheetyClient.delete(`/${sheet}/${id}`);
    return { success: true, message: "Record deleted successfully" };
  } catch (error) {
    console.error("❌ Error deleting from Sheety:", error.response?.data || error.message);
    throw new Error("Failed to delete data from Sheety");
  }
};
