import GeneralSetting from '../models/GeneralSetting.js';

// @desc    Get a specific setting by key
// @route   GET /api/settings/:key
export const getSetting = async (req, res) => {
  try {
    const setting = await GeneralSetting.findOne({ key: req.params.key });
    if (!setting) {
      // Return a default value or 404
      return res.json({ success: true, data: { key: req.params.key, value: '' } });
    }
    res.json({ success: true, data: setting });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update or create a setting (Admin only)
// @route   POST /api/settings
export const updateSetting = async (req, res) => {
  try {
    const { key, value } = req.body;
    let setting = await GeneralSetting.findOne({ key });

    if (setting) {
      setting.value = value;
      setting.updatedAt = Date.now();
      await setting.save();
    } else {
      setting = await GeneralSetting.create({ key, value });
    }

    res.json({ success: true, data: setting });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc    Get all settings
// @route   GET /api/settings
export const getAllSettings = async (req, res) => {
  try {
    const settings = await GeneralSetting.find();
    res.json({ success: true, data: settings });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
