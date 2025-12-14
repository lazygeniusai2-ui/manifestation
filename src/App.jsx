import React, { useState } from 'react';

// Simple icon components using emoji
const Sparkles = () => <span style={{fontSize: '1.2em'}}>✨</span>;
const Download = () => <span style={{fontSize: '1.2em'}}>⬇️</span>;
const Loader = () => <span style={{fontSize: '1.2em'}}>⏳</span>;
const ArrowRight = () => <span style={{fontSize: '1.2em'}}>→</span>;
const ArrowLeft = () => <span style={{fontSize: '1.2em'}}>←</span>;
const Check = () => <span style={{fontSize: '1.2em'}}>✓</span>;

export default function ManifestationCoach() {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [program, setProgram] = useState(null);
  
  const [formData, setFormData] = useState({
    // Page 1: Current Life Situation
    name: '',
    age: '',
    currentLifeSatisfaction: '5',
    financialSituation: '',
    currentIncome: '',
    relationshipStatus: '',
    healthStatus: '',
    careerStatus: '',
    biggestStressor: '',
    
    // Page 2: Manifestation Goals
    primaryGoal: '',
    financialGoals: '',
    relationshipGoals: '',
    healthGoals: '',
    careerGoals: '',
    spiritualGoals: '',
    timelineUrgency: '90days',
    whyTheseGoals: '',
    
    // Page 3: Limiting Beliefs
    moneyBeliefs: '',
    relationshipBeliefs: '',
    selfWorthBeliefs: '',
    successBeliefs: '',
    pastFailures: '',
    fearsList: '',
    
    // Page 4: Daily Life & Schedule
    wakeUpTime: '',
    sleepTime: '',
    morningRoutine: '',
    availableTime: '',
    quietTimePreference: '',
    meditationExperience: '',
    
    // Page 5: Past Manifestation Experience
    pastSuccesses: '',
    techniquesTried: '',
    whatWorked: '',
    whatDidntWork: '',
    currentPractices: '',
    
    // Page 6: Personality & Preferences
    visualLearner: 'yes',
    preferredTechnique: 'visualization',
    journalingHabit: '',
    creativityLevel: '5',
    disciplineLevel: '5',
    
    // Page 7: Support System
    supportNetwork: '',
    accountabilityPartner: '',
    familySupport: '',
    privateOrPublic: 'private',
    
    // Page 8: Commitment Level
    hoursPerWeek: '',
    commitment90Days: 'yes',
    obstaclesConcerns: '',
    motivationLevel: '8'
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const generateProgram = async () => {
    setLoading(true);
    
    const prompt = `You are a master manifestation coach trained in the Silva Method, law of attraction, neuroscience, and psychology. You have helped thousands of people manifest their dreams using proven techniques.

Create a COMPREHENSIVE, PERSONALIZED 90-day manifestation program based on this individual's profile:

# CURRENT LIFE SITUATION
Name: ${formData.name}
Age: ${formData.age}
Life Satisfaction (1-10): ${formData.currentLifeSatisfaction}
Financial Situation: ${formData.financialSituation}
Current Income: ${formData.currentIncome}
Relationship Status: ${formData.relationshipStatus}
Health Status: ${formData.healthStatus}
Career Status: ${formData.careerStatus}
Biggest Stressor: ${formData.biggestStressor}

# MANIFESTATION GOALS
Primary Goal: ${formData.primaryGoal}
Financial Goals: ${formData.financialGoals}
Relationship Goals: ${formData.relationshipGoals}
Health Goals: ${formData.healthGoals}
Career Goals: ${formData.careerGoals}
Spiritual Goals: ${formData.spiritualGoals}
Timeline: ${formData.timelineUrgency}
Why These Matter: ${formData.whyTheseGoals}

# LIMITING BELIEFS TO OVERCOME
Money Beliefs: ${formData.moneyBeliefs}
Relationship Beliefs: ${formData.relationshipBeliefs}
Self-Worth Beliefs: ${formData.selfWorthBeliefs}
Success Beliefs: ${formData.successBeliefs}
Past Failures: ${formData.pastFailures}
Fears: ${formData.fearsList}

# DAILY SCHEDULE
Wake Up: ${formData.wakeUpTime}
Sleep: ${formData.sleepTime}
Morning Routine: ${formData.morningRoutine}
Available Time Daily: ${formData.availableTime}
Quiet Time Preference: ${formData.quietTimePreference}
Meditation Experience: ${formData.meditationExperience}

# PAST EXPERIENCE
Past Successes: ${formData.pastSuccesses}
Techniques Tried: ${formData.techniquesTried}
What Worked: ${formData.whatWorked}
What Didn't Work: ${formData.whatDidntWork}
Current Practices: ${formData.currentPractices}

# PERSONALITY & PREFERENCES
Visual Learner: ${formData.visualLearner}
Preferred Technique: ${formData.preferredTechnique}
Journaling Habit: ${formData.journalingHabit}
Creativity (1-10): ${formData.creativityLevel}
Discipline (1-10): ${formData.disciplineLevel}

# SUPPORT SYSTEM
Support Network: ${formData.supportNetwork}
Accountability Partner: ${formData.accountabilityPartner}
Family Support: ${formData.familySupport}
Privacy Preference: ${formData.privateOrPublic}

# COMMITMENT
Hours Per Week Available: ${formData.hoursPerWeek}
90-Day Commitment: ${formData.commitment90Days}
Concerns: ${formData.obstaclesConcerns}
Motivation Level (1-10): ${formData.motivationLevel}

---

CREATE A COMPLETE 90-DAY MANIFESTATION PROGRAM WITH THE FOLLOWING STRUCTURE:

# EXECUTIVE SUMMARY
- Overview of their manifestation journey
- Key goals and why they matter
- Success probability and timeline
- What makes their profile unique

# PART 1: FOUNDATION (Days 1-30)

## Week 1: Entering Alpha State Mastery
- Daily Silva Method practice (detailed instructions)
- Morning routine (exact times based on their schedule)
- Evening routine (exact times based on their schedule)
- Alpha level countdown technique
- Mental screen visualization setup
- Success metrics for Week 1

## Week 2: Limiting Belief Transformation
- Specific beliefs to address (from their profile)
- Daily reprogramming exercises
- Affirmations customized to their beliefs
- Release rituals
- Evidence journal prompts
- Success metrics for Week 2

## Week 3: Goal Crystallization
- Primary goal visualization script (detailed)
- Multi-sensory manifestation exercise
- Future self meditation
- Vision board creation guide
- Acting "as if" exercises
- Success metrics for Week 3

## Week 4: Energy Alignment
- Frequency matching techniques
- Gratitude practice specific to their goals
- Emotional mastery exercises
- Chakra alignment (if open to it)
- Energy clearing rituals
- Success metrics for Week 4

# PART 2: ACCELERATION (Days 31-60)

## Week 5-6: Advanced Visualization
- 3D reality visualization scripts
- Time travel meditation
- Parallel reality shifting
- Quantum jumping exercises
- Detailed scenes for each major goal
- Success metrics

## Week 7-8: Inspired Action Plan
- Aligned action steps for each goal
- Opportunity recognition training
- Synchronicity tracking
- Network activation strategies
- Monthly milestone targets
- Success metrics

# PART 3: MANIFESTATION (Days 61-90)

## Week 9-10: Receiving Mode
- Expectation vs attachment
- Allowing exercises
- Receptivity meditations
- Trust building practices
- Detachment techniques
- Success metrics

## Week 11-12: Integration & Celebration
- Evidence documentation
- Success celebration rituals
- New manifestation goals
- Maintenance practice
- Long-term sustainability plan
- Success metrics

# DAILY PRACTICES (PERSONALIZED TO THEIR SCHEDULE)

## Morning Ritual (${formData.wakeUpTime} - 15 minutes)
1. [Create exact 15-minute morning practice based on their wake time and preferences]
2. [Include specific affirmations for their goals]
3. [Silva Method alpha state practice]
4. [Visualization exercise for primary goal]
5. [Gratitude statements]

## Evening Ritual (${formData.sleepTime} - 10 minutes)
1. [Create exact 10-minute evening practice]
2. [Day review and wins]
3. [Programming subconscious for overnight manifestation]
4. [Release worries technique]
5. [Sleep affirmations]

## Optional Midday Boost (5 minutes)
1. [Quick energy alignment]
2. [Micro-visualization]
3. [Affirmation reminder]

# WEEKLY PRACTICES
- Vision board review (Sundays)
- Progress tracking
- Evidence journal
- Manifestation milestone check-ins

# CUSTOM AFFIRMATIONS
Create 20 powerful affirmations specifically for:
- Their financial goals
- Their relationship goals
- Their health goals
- Their career goals
- Their self-worth
- Overcoming their specific limiting beliefs

Format: "I am..." statements in present tense

# VISUALIZATION SCRIPTS

## PRIMARY GOAL Script (${formData.primaryGoal})
[Write a detailed 5-minute visualization script specifically for their primary goal. Include:
- Setting the scene with all 5 senses
- Emotions they'll feel when it's achieved
- People around them
- Specific details from their goal
- End with gratitude statement]

## FINANCIAL GOAL Script
[Same detailed format for financial goals]

## RELATIONSHIP GOAL Script
[Same detailed format for relationship goals]

# LIMITING BELIEF REPROGRAMMING

For each limiting belief they mentioned:
1. Identify the belief
2. Find the origin (childhood, past experience)
3. Challenge with evidence
4. Create new empowering belief
5. Daily practice to install new belief
6. Affirmations specific to this belief

# MANIFESTATION TRACKING

## Evidence Journal Template
[Create template for tracking:
- Daily synchronicities
- Small manifestations
- Progress toward goals
- Mindset shifts
- Energy level
- Gratitude moments]

## Weekly Check-In Questions
1. What manifested this week?
2. What aligned actions did I take?
3. What limiting beliefs surfaced?
4. What am I grateful for?
5. What's my next inspired action?

## Monthly Milestone Assessment
[Create assessment for Days 30, 60, 90]

# OBSTACLE TROUBLESHOOTING

Address their specific concerns: ${formData.obstaclesConcerns}

Common obstacles and solutions:
1. Doubt and impatience
2. Conflicting desires
3. Resistance from others
4. Past programming
5. Fear of success/failure

# RESOURCES & TOOLS
- Recommended apps
- Meditation timers
- Journal templates
- Vision board tools
- Accountability systems

# SUCCESS INDICATORS

Signs manifestation is working:
1. Increased synchronicities
2. Opportunities appearing
3. Feeling aligned and peaceful
4. Small manifestations happening
5. Energy shift
6. New thoughts and ideas
7. Meeting key people
8. Doors opening

# 90-DAY ROADMAP

## Month 1: FOUNDATION
Week 1: Learn Silva Method alpha state
Week 2: Release limiting beliefs
Week 3: Clarify and crystallize goals
Week 4: Raise vibration and energy

## Month 2: ACCELERATION
Week 5-6: Master advanced visualization
Week 7-8: Take inspired action

## Month 3: MANIFESTATION
Week 9-10: Enter receiving mode
Week 11-12: Celebrate and integrate

# BEYOND 90 DAYS

Long-term practice:
- Daily maintenance routine (10 minutes)
- Monthly goal review
- Quarterly vision update
- Annual manifestation planning

---

Make this deeply personal to ${formData.name}. Use their specific goals, beliefs, schedule, and preferences. This should feel like it was created JUST for them by a personal coach.

Be encouraging, specific, and actionable. Every day should have clear instructions.`;

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 16000,
          messages: [
            { role: "user", content: prompt }
          ]
        })
      });

      const data = await response.json();
      const programText = data.content[0].text;
      
      setProgram(programText);
      setCurrentPage(9);
    } catch (error) {
      console.error("Error generating program:", error);
      alert("There was an error generating your program. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const downloadProgram = () => {
    const element = document.createElement("a");
    const file = new Blob([program], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${formData.name.replace(/\s+/g, '_')}_90Day_Manifestation_Program.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, 9));
  const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));

  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    border: '2px solid #e5e7eb',
    borderRadius: '8px',
    fontSize: '1rem',
    outline: 'none',
    fontFamily: 'inherit',
    transition: 'border-color 0.3s'
  };

  const labelStyle = {
    display: 'block',
    fontWeight: '600',
    marginBottom: '0.5rem',
    color: '#1a1a1a'
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: '100px',
    resize: 'vertical'
  };

  const renderFormPage = () => {
    switch(currentPage) {
      case 1:
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', fontWeight: '700' }}>
              Your Current Life Situation
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem' }}>
              <div>
                <label style={labelStyle}>Your Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="First name or nickname"
                  style={inputStyle}
                  onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>
              <div>
                <label style={labelStyle}>Age</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  placeholder="Your age"
                  style={inputStyle}
                  onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>
            </div>

            <div>
              <label style={labelStyle}>Life Satisfaction (1-10): {formData.currentLifeSatisfaction}</label>
              <input
                type="range"
                name="currentLifeSatisfaction"
                min="1"
                max="10"
                value={formData.currentLifeSatisfaction}
                onChange={handleInputChange}
                style={{ width: '100%' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#6b7280' }}>
                <span>Very Unsatisfied</span>
                <span>Extremely Satisfied</span>
              </div>
            </div>

            <div>
              <label style={labelStyle}>Current Financial Situation *</label>
              <textarea
                name="financialSituation"
                value={formData.financialSituation}
                onChange={handleInputChange}
                placeholder="Describe your current financial reality (income, debt, savings, stress level)"
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div>
              <label style={labelStyle}>Current Monthly Income</label>
              <input
                type="text"
                name="currentIncome"
                value={formData.currentIncome}
                onChange={handleInputChange}
                placeholder="e.g., $3,500/month"
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={labelStyle}>Relationship Status</label>
                <select
                  name="relationshipStatus"
                  value={formData.relationshipStatus}
                  onChange={handleInputChange}
                  style={inputStyle}
                >
                  <option value="">Select...</option>
                  <option value="single">Single</option>
                  <option value="dating">Dating</option>
                  <option value="relationship">In a Relationship</option>
                  <option value="married">Married</option>
                  <option value="divorced">Divorced</option>
                  <option value="complicated">It's Complicated</option>
                </select>
              </div>
              <div>
                <label style={labelStyle}>Health Status</label>
                <select
                  name="healthStatus"
                  value={formData.healthStatus}
                  onChange={handleInputChange}
                  style={inputStyle}
                >
                  <option value="">Select...</option>
                  <option value="excellent">Excellent</option>
                  <option value="good">Good</option>
                  <option value="fair">Fair</option>
                  <option value="poor">Poor</option>
                  <option value="improving">Improving</option>
                </select>
              </div>
            </div>

            <div>
              <label style={labelStyle}>Career Status</label>
              <textarea
                name="careerStatus"
                value={formData.careerStatus}
                onChange={handleInputChange}
                placeholder="Current job, satisfaction level, career goals"
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div>
              <label style={labelStyle}>Biggest Current Stressor *</label>
              <textarea
                name="biggestStressor"
                value={formData.biggestStressor}
                onChange={handleInputChange}
                placeholder="What keeps you up at night? What causes the most stress?"
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', fontWeight: '700' }}>
              What Do You Want to Manifest?
            </h2>
            
            <div>
              <label style={labelStyle}>Your #1 Primary Goal *</label>
              <textarea
                name="primaryGoal"
                value={formData.primaryGoal}
                onChange={handleInputChange}
                placeholder="The ONE thing that would transform your life. Be specific!"
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div>
              <label style={labelStyle}>Financial Goals</label>
              <textarea
                name="financialGoals"
                value={formData.financialGoals}
                onChange={handleInputChange}
                placeholder="Specific income, savings, debt freedom, investments, passive income"
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div>
              <label style={labelStyle}>Relationship Goals</label>
              <textarea
                name="relationshipGoals"
                value={formData.relationshipGoals}
                onChange={handleInputChange}
                placeholder="Partner qualities, marriage, family, friendships, community"
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div>
              <label style={labelStyle}>Health & Fitness Goals</label>
              <textarea
                name="healthGoals"
                value={formData.healthGoals}
                onChange={handleInputChange}
                placeholder="Weight, energy, fitness level, health conditions to heal"
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div>
              <label style={labelStyle}>Career & Business Goals</label>
              <textarea
                name="careerGoals"
                value={formData.careerGoals}
                onChange={handleInputChange}
                placeholder="Promotion, new job, business launch, specific achievements"
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div>
              <label style={labelStyle}>Spiritual/Personal Growth Goals</label>
              <textarea
                name="spiritualGoals"
                value={formData.spiritualGoals}
                onChange={handleInputChange}
                placeholder="Peace, purpose, connection, consciousness expansion"
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div>
              <label style={labelStyle}>Timeline Urgency *</label>
              <select
                name="timelineUrgency"
                value={formData.timelineUrgency}
                onChange={handleInputChange}
                style={inputStyle}
              >
                <option value="30days">30 Days (Emergency)</option>
                <option value="90days">90 Days (Focused)</option>
                <option value="6months">6 Months (Building)</option>
                <option value="1year">1 Year (Long-term)</option>
              </select>
            </div>

            <div>
              <label style={labelStyle}>Why Do These Goals Matter to You? *</label>
              <textarea
                name="whyTheseGoals"
                value={formData.whyTheseGoals}
                onChange={handleInputChange}
                placeholder="The deeper reason. What will achieving these give you? How will it feel?"
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', fontWeight: '700' }}>
              Limiting Beliefs to Transform
            </h2>
            <p style={{ color: '#6b7280', marginBottom: '1rem' }}>
              Be honest here. These beliefs are what's blocking your manifestations. We'll transform them.
            </p>
            
            <div>
              <label style={labelStyle}>Your Beliefs About Money</label>
              <textarea
                name="moneyBeliefs"
                value={formData.moneyBeliefs}
                onChange={handleInputChange}
                placeholder="Examples: 'Money is hard to make', 'Rich people are greedy', 'I'm not good with money'"
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div>
              <label style={labelStyle}>Your Beliefs About Relationships</label>
              <textarea
                name="relationshipBeliefs"
                value={formData.relationshipBeliefs}
                onChange={handleInputChange}
                placeholder="Examples: 'All the good ones are taken', 'Love is hard', 'I always get hurt'"
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div>
              <label style={labelStyle}>Your Beliefs About Your Self-Worth</label>
              <textarea
                name="selfWorthBeliefs"
                value={formData.selfWorthBeliefs}
                onChange={handleInputChange}
                placeholder="Examples: 'I'm not good enough', 'I don't deserve success', 'Who am I to...'"
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div>
              <label style={labelStyle}>Your Beliefs About Success</label>
              <textarea
                name="successBeliefs"
                value={formData.successBeliefs}
                onChange={handleInputChange}
                placeholder="Examples: 'Success requires struggle', 'I'll lose friends if I succeed', 'Success is for other people'"
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div>
              <label style={labelStyle}>Past Failures or Disappointments</label>
              <textarea
                name="pastFailures"
                value={formData.pastFailures}
                onChange={handleInputChange}
                placeholder="What happened before that makes you doubt? Be specific."
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div>
              <label style={labelStyle}>Your Biggest Fears *</label>
              <textarea
                name="fearsList"
                value={formData.fearsList}
                onChange={handleInputChange}
                placeholder="What are you actually afraid of? Failure? Success? Rejection? Being seen?"
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', fontWeight: '700' }}>
              Your Daily Schedule
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={labelStyle}>What Time Do You Wake Up? *</label>
                <input
                  type="time"
                  name="wakeUpTime"
                  value={formData.wakeUpTime}
                  onChange={handleInputChange}
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>What Time Do You Sleep?</label>
                <input
                  type="time"
                  name="sleepTime"
                  value={formData.sleepTime}
                  onChange={handleInputChange}
                  style={inputStyle}
                />
              </div>
            </div>

            <div>
              <label style={labelStyle}>Current Morning Routine</label>
              <textarea
                name="morningRoutine"
                value={formData.morningRoutine}
                onChange={handleInputChange}
                placeholder="What does your morning look like? Rush? Calm? Kids? Coffee?"
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div>
              <label style={labelStyle}>Available Time for Daily Practice *</label>
              <select
                name="availableTime"
                value={formData.availableTime}
                onChange={handleInputChange}
                style={inputStyle}
              >
                <option value="">Select...</option>
                <option value="5-10min">5-10 minutes (Very busy)</option>
                <option value="15-20min">15-20 minutes (Realistic)</option>
                <option value="30min">30 minutes (Ideal)</option>
                <option value="1hour">1 hour (Deep commitment)</option>
              </select>
            </div>

            <div>
              <label style={labelStyle}>When Do You Prefer Quiet Time? *</label>
              <select
                name="quietTimePreference"
                value={formData.quietTimePreference}
                onChange={handleInputChange}
                style={inputStyle}
              >
                <option value="">Select...</option>
                <option value="early-morning">Early Morning (before others wake)</option>
                <option value="morning">Mid-Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="evening">Evening</option>
                <option value="night">Late Night</option>
              </select>
            </div>

            <div>
              <label style={labelStyle}>Meditation Experience</label>
              <textarea
                name="meditationExperience"
                value={formData.meditationExperience}
                onChange={handleInputChange}
                placeholder="Complete beginner? Experienced? What techniques have you tried?"
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>
          </div>
        );

      case 5:
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', fontWeight: '700' }}>
              Past Manifestation Experience
            </h2>
            
            <div>
              <label style={labelStyle}>Past Manifestation Successes</label>
              <textarea
                name="pastSuccesses"
                value={formData.pastSuccesses}
                onChange={handleInputChange}
                placeholder="What have you successfully manifested before? Even small things count!"
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div>
              <label style={labelStyle}>Manifestation Techniques You've Tried</label>
              <textarea
                name="techniquesTried"
                value={formData.techniquesTried}
                onChange={handleInputChange}
                placeholder="Vision boards? Affirmations? Scripting? Visualization? Silva Method? Law of Attraction?"
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div>
              <label style={labelStyle}>What Worked for You?</label>
              <textarea
                name="whatWorked"
                value={formData.whatWorked}
                onChange={handleInputChange}
                placeholder="Which techniques gave you results? Even if small."
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div>
              <label style={labelStyle}>What Didn't Work?</label>
              <textarea
                name="whatDidntWork"
                value={formData.whatDidntWork}
                onChange={handleInputChange}
                placeholder="What felt empty or fake? What didn't resonate?"
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div>
              <label style={labelStyle}>Current Spiritual/Manifestation Practices</label>
              <textarea
                name="currentPractices"
                value={formData.currentPractices}
                onChange={handleInputChange}
                placeholder="What are you currently doing? Anything regular?"
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>
          </div>
        );

      case 6:
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', fontWeight: '700' }}>
              Your Learning Style & Preferences
            </h2>
            
            <div>
              <label style={labelStyle}>Are You a Visual Learner? *</label>
              <select
                name="visualLearner"
                value={formData.visualLearner}
                onChange={handleInputChange}
                style={inputStyle}
              >
                <option value="yes">Yes - I see things in my mind easily</option>
                <option value="somewhat">Somewhat - With practice</option>
                <option value="no">No - I'm more feeling/auditory</option>
              </select>
            </div>

            <div>
              <label style={labelStyle}>Preferred Manifestation Technique *</label>
              <select
                name="preferredTechnique"
                value={formData.preferredTechnique}
                onChange={handleInputChange}
                style={inputStyle}
              >
                <option value="visualization">Visualization (seeing it)</option>
                <option value="feeling">Feeling (emotions)</option>
                <option value="affirmations">Affirmations (speaking)</option>
                <option value="scripting">Scripting (writing)</option>
                <option value="meditation">Meditation (stillness)</option>
                <option value="action">Action (doing)</option>
              </select>
            </div>

            <div>
              <label style={labelStyle}>Journaling Habit</label>
              <textarea
                name="journalingHabit"
                value={formData.journalingHabit}
                onChange={handleInputChange}
                placeholder="Do you journal? How often? What style?"
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div>
              <label style={labelStyle}>Creativity Level (1-10): {formData.creativityLevel}</label>
              <input
                type="range"
                name="creativityLevel"
                min="1"
                max="10"
                value={formData.creativityLevel}
                onChange={handleInputChange}
                style={{ width: '100%' }}
              />
            </div>

            <div>
              <label style={labelStyle}>Discipline Level (1-10): {formData.disciplineLevel}</label>
              <input
                type="range"
                name="disciplineLevel"
                min="1"
                max="10"
                value={formData.disciplineLevel}
                onChange={handleInputChange}
                style={{ width: '100%' }}
              />
            </div>
          </div>
        );

      case 7:
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', fontWeight: '700' }}>
              Your Support System
            </h2>
            
            <div>
              <label style={labelStyle}>Who Supports Your Dreams?</label>
              <textarea
                name="supportNetwork"
                value={formData.supportNetwork}
                onChange={handleInputChange}
                placeholder="Friends, family, mentors, community? Or are you alone in this?"
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div>
              <label style={labelStyle}>Accountability Partner?</label>
              <select
                name="accountabilityPartner"
                value={formData.accountabilityPartner}
                onChange={handleInputChange}
                style={inputStyle}
              >
                <option value="">Select...</option>
                <option value="yes">Yes, I have someone</option>
                <option value="want">I want to find one</option>
                <option value="no">I prefer to work alone</option>
              </select>
            </div>

            <div>
              <label style={labelStyle}>Family Support Level</label>
              <textarea
                name="familySupport"
                value={formData.familySupport}
                onChange={handleInputChange}
                placeholder="Does your family support your goals? Or are they skeptical?"
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div>
              <label style={labelStyle}>Do You Prefer to Manifest Privately or Share? *</label>
              <select
                name="privateOrPublic"
                value={formData.privateOrPublic}
                onChange={handleInputChange}
                style={inputStyle}
              >
                <option value="private">Private - I don't share my goals</option>
                <option value="selective">Selective - Only with trusted people</option>
                <option value="public">Public - I'm open about it</option>
              </select>
            </div>
          </div>
        );

      case 8:
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', fontWeight: '700' }}>
              Your Commitment
            </h2>
            
            <div>
              <label style={labelStyle}>Hours Per Week for Manifestation *</label>
              <select
                name="hoursPerWeek"
                value={formData.hoursPerWeek}
                onChange={handleInputChange}
                style={inputStyle}
              >
                <option value="">Select...</option>
                <option value="1-2">1-2 hours (Minimum)</option>
                <option value="3-5">3-5 hours (Good)</option>
                <option value="5-7">5-7 hours (Excellent)</option>
                <option value="7+">7+ hours (Maximum)</option>
              </select>
            </div>

            <div>
              <label style={labelStyle}>Can You Commit to 90 Days? *</label>
              <select
                name="commitment90Days"
                value={formData.commitment90Days}
                onChange={handleInputChange}
                style={inputStyle}
              >
                <option value="yes">Yes - I'm all in</option>
                <option value="probably">Probably - I'll try my best</option>
                <option value="unsure">Unsure - Life is unpredictable</option>
              </select>
            </div>

            <div>
              <label style={labelStyle}>Potential Obstacles or Concerns</label>
              <textarea
                name="obstaclesConcerns"
                value={formData.obstaclesConcerns}
                onChange={handleInputChange}
                placeholder="What might get in the way? Time? Skepticism? Life circumstances?"
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div>
              <label style={labelStyle}>Motivation Level (1-10): {formData.motivationLevel}</label>
              <input
                type="range"
                name="motivationLevel"
                min="1"
                max="10"
                value={formData.motivationLevel}
                onChange={handleInputChange}
                style={{ width: '100%' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#6b7280' }}>
                <span>Not Motivated</span>
                <span>Extremely Motivated</span>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #FFD700 0%, #FF6B6B 50%, #00E5FF 100%)',
      padding: '2rem'
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        background: 'white',
        borderRadius: '16px',
        padding: '3rem',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{
            width: '80px',
            height: '80px',
            background: 'linear-gradient(135deg, #FFD700 0%, #FF6B6B 50%, #00E5FF 100%)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1rem',
            fontSize: '2.5rem'
          }}>
            🧠
          </div>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            marginBottom: '0.5rem',
            background: 'linear-gradient(135deg, #FFD700 0%, #FF6B6B 50%, #00E5FF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Manifestation Coach
          </h1>
          <p style={{ color: '#6b7280', fontSize: '1.1rem' }}>
            Your personalized 90-day Silva Method manifestation program
          </p>
        </div>

        {currentPage <= 8 && (
          <>
            <div style={{ marginBottom: '2rem' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '0.5rem',
                fontSize: '0.9rem',
                color: '#6b7280'
              }}>
                <span>Page {currentPage} of 8</span>
                <span>{Math.round((currentPage / 8) * 100)}% Complete</span>
              </div>
              <div style={{
                height: '8px',
                background: '#e5e7eb',
                borderRadius: '4px',
                overflow: 'hidden'
              }}>
                <div style={{
                  height: '100%',
                  width: `${(currentPage / 8) * 100}%`,
                  background: 'linear-gradient(135deg, #FFD700 0%, #FF6B6B 50%, #00E5FF 100%)',
                  transition: 'width 0.3s'
                }} />
              </div>
            </div>

            {renderFormPage()}

            <div style={{
              display: 'flex',
              gap: '1rem',
              marginTop: '2rem'
            }}>
              {currentPage > 1 && (
                <button
                  onClick={prevPage}
                  style={{
                    flex: 1,
                    padding: '1rem',
                    background: 'white',
                    color: '#FFD700',
                    border: '2px solid #FFD700',
                    borderRadius: '8px',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <ArrowLeft size={20} />
                  Back
                </button>
              )}
              
              {currentPage < 8 ? (
                <button
                  onClick={nextPage}
                  style={{
                    flex: 2,
                    padding: '1rem',
                    background: 'linear-gradient(135deg, #FFD700 0%, #FF6B6B 50%, #00E5FF 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                >
                  Continue
                  <ArrowRight size={20} />
                </button>
              ) : (
                <button
                  onClick={generateProgram}
                  disabled={loading}
                  style={{
                    flex: 2,
                    padding: '1rem',
                    background: loading ? '#9ca3af' : 'linear-gradient(135deg, #FFD700 0%, #FF6B6B 50%, #00E5FF 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                >
                  {loading ? (
                    <>
                      <Loader className="spinning" size={20} />
                      Creating Your Program...
                    </>
                  ) : (
                    <>
                      <Sparkles size={20} />
                      Generate My Program
                    </>
                  )}
                </button>
              )}
            </div>
          </>
        )}

        {currentPage === 9 && program && (
          <div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '2rem'
            }}>
              <h2 style={{ fontSize: '1.8rem', fontWeight: '700' }}>
                Your 90-Day Manifestation Program
              </h2>
              <button
                onClick={downloadProgram}
                style={{
                  padding: '0.75rem 1.5rem',
                  background: 'linear-gradient(135deg, #FFD700 0%, #FF6B6B 50%, #00E5FF 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <Download size={20} />
                Download
              </button>
            </div>

            <div style={{
              background: '#f9fafb',
              padding: '2rem',
              borderRadius: '12px',
              marginBottom: '2rem',
              maxHeight: '600px',
              overflowY: 'auto',
              border: '1px solid #e5e7eb'
            }}>
              <pre style={{
                whiteSpace: 'pre-wrap',
                fontFamily: 'Georgia, serif',
                fontSize: '0.95rem',
                lineHeight: '1.8',
                color: '#1a1a1a'
              }}>
                {program}
              </pre>
            </div>

            <button
              onClick={() => {
                setCurrentPage(1);
                setProgram(null);
              }}
              style={{
                width: '100%',
                padding: '1rem',
                background: 'white',
                color: '#FFD700',
                border: '2px solid #FFD700',
                borderRadius: '8px',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Create Another Program
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .spinning {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </div>
  );
}